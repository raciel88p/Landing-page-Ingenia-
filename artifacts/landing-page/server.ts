import express from "express";
import compression from "compression";
import { readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 3000;
const base = process.env.BASE_PATH || "/";

async function createApp() {
  const app = express();
  app.use(compression());

  if (isProd) {
    const { default: sirv } = await import("sirv");
    app.use(base, sirv(resolve(__dirname, "dist/client"), { single: false }));

    const { render } = await import("./dist/server/entry-server.js");
    const template = readFileSync(resolve(__dirname, "dist/client/index.html"), "utf-8");

    app.use(/(.*)/, async (_req, res) => {
      try {
        const appHtml = render();
        const html = template.replace("<!--ssr-outlet-->", appHtml);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        console.error(e);
        res.status(500).end("Internal Server Error");
      }
    });
  } else {
    const { createServer } = await import("vite");
    const vite = await createServer({
      configFile: resolve(__dirname, "vite.config.ts"),
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use(/(.*)/, async (req, res) => {
      try {
        let template = readFileSync(resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, template);
        const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
        const appHtml = render();
        const html = template.replace("<!--ssr-outlet-->", appHtml);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        if (e instanceof Error) vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end((e as Error).message);
      }
    });
  }

  app.listen(port, "0.0.0.0", () => {
    console.log(`SSR server running at http://localhost:${port}`);
  });
}

createApp();

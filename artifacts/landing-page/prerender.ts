import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const { render } = await import(
    resolve(__dirname, "dist/server/entry-server.js")
  );

  const template = readFileSync(
    resolve(__dirname, "dist/client/index.html"),
    "utf-8"
  );

  const appHtml = render();
  const html = template.replace("<!--ssr-outlet-->", appHtml);

  writeFileSync(resolve(__dirname, "dist/client/index.html"), html);

  console.log("✓ index.html pre-renderizado con SSG");
}

prerender().catch((err) => {
  console.error("Error en pre-renderizado:", err);
  process.exit(1);
});

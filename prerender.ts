import fs from "fs";

const entryPointRelativePath = 'dist/index.html'

const template = fs.readFileSync(entryPointRelativePath, 'utf-8')
//@ts-ignore
const { render } = await import('./dist/server/entry-server.js');

(async () => {
  const appHtml = await render()

  const html = template.replace(`<!--app-html-->`, appHtml)
  fs.writeFileSync(entryPointRelativePath, html)
})()
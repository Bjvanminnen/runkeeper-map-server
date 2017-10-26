export default function createPage(pageName, contents) {
  return `
<!doctype html>
<html>
  <head>
    <title>${pageName}</title>
  </head>
  <body>
    <div id="root">${contents}</div>
  </body>
`;
}
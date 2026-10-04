const fs = require('fs');

async function main() {
  const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1Y2YzOWFkNDdlZmYwMjNiZmEwOWQzMzgxZjBmEgsSBxD2z--XlR4YAZIBIwoKcHJvamVjdF9pZBIVQhM3MjgxMDUyNDE3NzA3MjIwNjUx&filename=&opi=89354086";
  const response = await fetch(url);
  const text = await response.text();
  fs.writeFileSync('stitch_projects.html', text);
  console.log("Downloaded projects HTML");
}
main();

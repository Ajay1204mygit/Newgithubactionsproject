import { createServer } from "node:http";

const html = `
  <div style="padding: 2px 20px; font-family: system-ui">
    <h1 style="color: #5C6AC4;">Hello, World!</h1>
    <p>
      <a href="/api/hello" style="color: inherit;">API Demo</a>
    </p>
  </div>
`;

const server = createServer((req, res) => {
  if (req.url === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server listening on port 3000");
});

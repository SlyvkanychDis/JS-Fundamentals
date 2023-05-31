const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  const hostname = os.hostname();
  const osType = os.type();
  const uptimeMinutes = Math.floor(os.uptime() / 60);
  const currentWorkingDirectory = process.cwd();
  const serverFilename = path.basename(__filename);
  
  const html = `
    <html>
    <head>
      <title>System Information</title>
    </head>
    <body>
      <h1>System Information</h1>
      <p>Hostname: ${hostname}</p>
      <p>Operating System: ${osType}</p>
      <p>Uptime (Minutes): ${uptimeMinutes}</p>
      <p>Current Working Directory: ${currentWorkingDirectory}</p>
      <p>Server Filename: ${serverFilename}</p>
    </body>
    </html>
  `;
  
  res.end(html);
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});


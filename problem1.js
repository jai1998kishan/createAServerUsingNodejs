// Based on the url the user hits , I want you to return custom responses.
// When url = /home , return response ==> Welcome home
// When url = /about, return response ==> Welcome to About Us page
// When url =/node, return response ==> Welcome to my Node Js project


const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome home');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to my Node.js project');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});

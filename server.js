const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');
const PORT = process.env.PORT || 9000;
const app = express();
app.get('/', (_q, r) => r.send('ok'));
const server = http.createServer(app);
app.use('/scopa', ExpressPeerServer(server, {
  path: '/', key: 'scopa', proxied: true,
  allow_discovery: false, corsOptions: { origin: true }
}));
server.listen(PORT);

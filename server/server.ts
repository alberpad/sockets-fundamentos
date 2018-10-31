import express, { Application } from 'express';
import socketIO from 'socket.io';
import http from 'http';
import path from 'path';

const app: Application = express();
let server = http.createServer(app);

const publicPath: string = path.resolve(__dirname, '../public');
const port: string = process.env.PORT || '3000';

app.use(express.static(publicPath));

// IO = esta la comunicación del backend
export let io = socketIO(server);

import './sockets/sockets';

server.listen(port, (err: any) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});

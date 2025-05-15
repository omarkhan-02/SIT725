// server.js
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection
io.on('connection', (socket) => {
  console.log(`🟢 ${socket.id} connected`);
  io.emit('system message', `User ${socket.id.slice(0, 4)} joined`);

  socket.on('chat message', (msg) => {
    const time = new Date().toLocaleTimeString();
    io.emit('chat message', `[${time}] User ${socket.id.slice(0, 4)}: ${msg}`);
  });

  socket.on('disconnect', () => {
    console.log(`🔴 ${socket.id} disconnected`);
    io.emit('system message', `User ${socket.id.slice(0, 4)} left`);
  });
});

const PORT = 3002;
httpServer.listen(PORT, () => {
  console.log(`🚀 Chat app running at http://localhost:${PORT}`);
});

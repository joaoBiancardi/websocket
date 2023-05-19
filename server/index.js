const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:3000",
  },
});

io.on("connection", (socket) => {
  let count = 0;
  console.log(`new connection: ${socket.id}`);

  setInterval(() => {
    if (count === 3) {
      return socket.emit("message", 1);
    }

    socket.emit("message", Math.random());
    count++;
  }, 1000);
});

server.listen(3333, () => {
  console.log("listening on *:3333");
});

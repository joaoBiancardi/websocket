import React from "react";
import { socket } from "../service/socket";

export function ConnectionManager() {
  function connect() {
    socket.connect();
    
    socket.on('received', message => {
      console.log(message)
    })
  }

  function disconnect() {
    socket.disconnect();
  }

  function sendMessge() {
    if(!socket) return;

    socket.emit('message', `Hello World ${Math.random()}`)
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <button onClick={sendMessge}>Send message</button>
    </>
  );
}

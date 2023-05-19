import React, { useState, useEffect } from "react";
import { socket } from "./service/socket";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [messageServer, setMessageServer] = useState("");

  function connect() {
    socket.connect();
    setIsConnected(true);

    socket.on("message", (response) => {
      if (response === 1) {
        return disconnect();
      }

      setMessageServer(response);
    });
  }

  function disconnect() {
    socket.disconnect();

    setIsConnected(false);
    setMessageServer("");
  }

  return (
    <div className="App">
      <p>State: {"" + isConnected}</p>
      <p>Message: {"" + messageServer}</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}

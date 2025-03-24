import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log("Conexión establecida con el WebSocket");
        client.subscribe("/topic/data", (message) => {
          const newData = JSON.parse(message.body);
          setData((prevData) => [...prevData, newData]);
        });
      },
      onDisconnect: () => {
        console.log("Desconectado del WebSocket");
      },
      onStompError: (error) => {
        console.error("Error en la conexión WebSocket:", error);
      },
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <div>
      <h1>Lista de datos en tiempo real</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.email} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
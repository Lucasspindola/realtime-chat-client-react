import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import React from "react";
import io from "socket.io-client";
import { ChatContext } from "../../Contexts/ChatContext";

export const Join = () => {
  const navigate = useNavigate();

  const { setSocket, userInfo } = useContext(ChatContext);

  const handleSubmit = async () => {
    const username = userInfo.nickname;
    if (!username.trim()) return;
    const socket = await io.connect("http://localhost:3001");
    socket.emit("set_nickname", username);
    setSocket(socket);
    navigate("/chat");
  };

  return (
    <main>
      <h1>Join</h1>
      <h2>{userInfo.nickname}</h2>
      <button onClick={() => handleSubmit()}>Entrar</button>
    </main>
  );
};

export default Join;

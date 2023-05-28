// import React from "react";

import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../Contexts/ChatContext";
import { instance } from "../../Services/api";

export const Chat = () => {
  const [messageList, setMessageList] = useState([]);
  const { socket, newMessage } = useContext(ChatContext);

  console.log(socket);
  useEffect(() => {
    const receiveMessageHandler = (data) => {
      setMessageList((current) => [...current, data]);
    };

    socket.on("receive_messege", receiveMessageHandler);

    return () => {
      socket.off("receive_messege", receiveMessageHandler);
    };
  }, [socket]);

  const messageRef = useRef();
  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;
    socket.emit("message", message);
    newMessage(message);

    resetInput();
  };

  const resetInput = () => {
    messageRef.current.value = "";
  };
  return (
    <main>
      <h1>Chat</h1>
      {
        (console.log(messageList),
        messageList.map((message, index) => (
          <div key={index}>
            <div className="message-author">
              <strong>{message.nameAuthor}</strong>
            </div>
            <div className="message-text">{message.textMessage}</div>
          </div>
        )))
      }
      <input type="text" placeholder="Nova mensagem" ref={messageRef} />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Enviar
      </button>
    </main>
  );
};

export default Chat;

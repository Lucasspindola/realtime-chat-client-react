import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../Contexts/ChatContext";
import { ChatContainer } from "./style";

export const Chat = () => {
  const { socket, newMessage, messageList, setMessageList, userInfo, logout } =
    useContext(ChatContext);
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
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const resetInput = () => {
    messageRef.current.value = "";
  };
  return (
    <ChatContainer>
      <header>
        <h1>CHAT WEB io</h1>
        <button
          onClick={() => {
            logout();
          }}
        >
          Sair
        </button>
      </header>
      <ul>
        {messageList.map((message, index) => (
          <li key={index} className="message-author">
            <h4>{message.nickname ? message.nickname : userInfo.nickname}:</h4>
            <span className="message-text">{message.textMessage}</span>
          </li>
        ))}
      </ul>
      <footer>
        <input
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="Nova mensagem"
          ref={messageRef}
        />

        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Enviar
        </button>
      </footer>
    </ChatContainer>
  );
};

export default Chat;

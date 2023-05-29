import { useContext } from "react";
import { ChatContext } from "../../Contexts/ChatContext";
import { JoinContainer } from "./style";
import { TbDoorExit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

export const Join = () => {
  const {
    userInfo,
    logout,
    setSocket,
    setMessageList,
    listOfPreviousMessages,
  } = useContext(ChatContext);
  const navigate = useNavigate();
  const handleSubmitJoin = async () => {
    const username = userInfo.nickname;

    if (!username.trim()) return;
    const socket = await io.connect("http://localhost:3001");
    socket.emit("set_nickname", username);
    setSocket(socket);
    setMessageList([]);
    listOfPreviousMessages();
    navigate("/chat");
  };

  return (
    <JoinContainer>
      <TbDoorExit className="background-icon" />

      <div className="cotainerMain ">
        <div className="title">
          <h3> Olá, {userInfo?.nickname}. Seja bem-vindo(a)!</h3>
        </div>
        <div>
          <button className="btnOpen" onClick={() => handleSubmitJoin()}>
            Entrar
          </button>
          <button className="btnExit" onClick={() => logout()}>
            Sair
          </button>
        </div>
      </div>
    </JoinContainer>
  );
};

export default Join;

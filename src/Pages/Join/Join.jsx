import { useContext } from "react";
import { ChatContext } from "../../Contexts/ChatContext";
import { JoinContainer } from "./style";
import { TbDoorExit } from "react-icons/tb";

export const Join = () => {
  const { userInfo, handleSubmitJoin, logout } = useContext(ChatContext);

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

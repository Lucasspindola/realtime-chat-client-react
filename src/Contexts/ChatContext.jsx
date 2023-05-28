import { createContext, useEffect, useState } from "react";
import { instance } from "../Services/api";
import AllRoutes from "../Routes";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

export const ChatContext = createContext();

export const ChatContextProvider = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [listMessages, setListMessages] = useState(false);
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

  useEffect(() => {
    const profileData = () => {
      const token = window.localStorage.getItem("authToken");
      instance
        .get(`/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    profileData();
  }, []);

  const newMessage = (data) => {
    data = { message: data };
    const token = window.localStorage.getItem("authToken");
    instance
      .post(`/messages`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listOfPreviousMessages = () => {
    const token = window.localStorage.getItem("authToken");
    instance
      .get(`/messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMessageList((current) => [...current, ...res.data]);
        console.log(messageList, "AQUIIIIIIIIIAAAAAAAAAAAAAAAAAAI");
      })
      .catch((error) => {
        console.log(error);
        console.log("ERROU GET LIST");
      });
  };

  const logout = () => {
    window.localStorage.removeItem("authToken");
    setUserInfo();
    navigate("/login");
  };

  return (
    <ChatContext.Provider
      value={{
        socket,
        setSocket,
        userInfo,
        newMessage,
        messageList,
        setMessageList,
        setListMessages,
        listMessages,
        listOfPreviousMessages,
        handleSubmitJoin,
        logout,
      }}
    >
      <AllRoutes />
    </ChatContext.Provider>
  );
};

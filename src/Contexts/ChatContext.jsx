import { createContext, useEffect, useState } from "react";
import { instance } from "../Services/api";
import AllRoutes from "../Routes";
import { useNavigate } from "react-router-dom";
// import io from "socket.io-client";
import { toast } from "react-toastify";

export const ChatContext = createContext();

export const ChatContextProvider = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [socket, setSocket] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [listMessages, setListMessages] = useState(false);
  const [profileState, setProfileState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (token) {
      const profileData = () => {
        instance
          .get(`/users/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            // console.log(res.data);
            setUserInfo(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      profileData();
    }
  }, [profileState]);

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
        // console.log(res.data);
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
        // console.log(res.data);
        setMessageList((current) => [...current, ...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    window.localStorage.removeItem("authToken");
    setUserInfo();
    toast.success(`Volte sempre!`);

    navigate("/login");
  };

  const sendToLogin = () => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
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
        logout,
        profileState,
        setProfileState,
        sendToLogin,
      }}
    >
      <AllRoutes />
    </ChatContext.Provider>
  );
};

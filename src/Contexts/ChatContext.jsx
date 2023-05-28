import { createContext, useEffect, useState } from "react";
import { instance } from "../Services/api";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [socket, setSocket] = useState(null);
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

  return (
    <ChatContext.Provider value={{ socket, setSocket, userInfo, newMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

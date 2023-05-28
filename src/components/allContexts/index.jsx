import { ChatContextProvider } from "../../Contexts/ChatContext";

export const AllContexts = ({ children }) => {
  return <ChatContextProvider>{children}</ChatContextProvider>;
};

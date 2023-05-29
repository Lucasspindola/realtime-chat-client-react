import { ToastContainer } from "react-toastify";
import { ChatContextProvider } from "../../Contexts/ChatContext";

export const AllContexts = ({ children }) => (
  <>
    <ChatContextProvider>{children}</ChatContextProvider>;
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ backgroundColor: "black", color: "white" }}
    />
  </>
);

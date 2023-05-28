import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "../Pages/Chat/Chat";
import Join from "../Pages/Join/Join";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/join" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};
export default AllRoutes;

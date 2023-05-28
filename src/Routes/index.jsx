import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import Join from "../components/Join/Join";
import Login from "../Pages/Login";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/join"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};
export default AllRoutes;

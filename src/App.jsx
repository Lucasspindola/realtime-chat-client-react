import "./App.css";

import AllRoutes from "./Routes";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://chatroom-api-deploy.onrender.com/",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

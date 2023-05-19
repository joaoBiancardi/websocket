import axios from "axios";

export const routeTeste = "/teste";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});
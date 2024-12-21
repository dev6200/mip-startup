import axios from "axios";
import { LoginParams } from "../types";

const login = async (loginParams: LoginParams) =>
  axios.post("http://localhost:5000/login", loginParams);

export { login };

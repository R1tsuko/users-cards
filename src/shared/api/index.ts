import axios from "axios";
import { UsersResponse } from "../types/index";

export const getUsersData = async () => {
  const response = await axios.get<Array<UsersResponse>>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

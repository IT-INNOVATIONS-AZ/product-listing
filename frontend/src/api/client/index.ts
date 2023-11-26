import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

interface IUseLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  name: string;
  password: string;
  password_confirm: string;
  role: string;
}

class Client {
  user = {
    login: ({ email, password }: IUseLogin) =>
      HttpClient.post(API_ENDPOINTS.USERS_LOGIN, { email, password }),
    register: ({
      email,
      password,
      password_confirm,
      name,
      role,
    }: IUserRegister) =>
      HttpClient.post(API_ENDPOINTS.USERS_REGISTER, {
        email,
        password,
        name,
        password_confirm,
        role,
      }),
  };
}

export default new Client();

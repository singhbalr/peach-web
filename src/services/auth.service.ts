import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  login = (email: string, password: string) => {
    return this.instance
      .post("/api/v1/medical-institutions/login", {
        email,
        password,
      })
      .then((res) => {
        return {
          // username: res.data.username,
          // avatar: res.data.avatar,
          // id: res.data.userId,
          accessToken: res.data.token,
          // expiredAt: res.data.expiredAt,
        };
      });
  };


}
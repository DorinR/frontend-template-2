import { AxiosClient } from "../axiosClient";
import { User } from "../models/User";

type GetUserAuthenticationDataBackendResponse = User;

export const getUserAuthenticationData = async () => {
  try {
    const { data } =
      await AxiosClient.post<GetUserAuthenticationDataBackendResponse>(
        "/auth/getUserData"
      );
    return {
      userData: data,
    };
  } catch (err) {
    return {
      userData: {
        id: null,
      },
    };
  }
};

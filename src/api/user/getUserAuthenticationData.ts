import { backendAccessPoint } from "../backendAccessPoint";
import { User } from "../models/User";

type GetUserAuthenticationDataBackendResponse = User;

export const getUserAuthenticationData = async () => {
  try {
    const { data } =
      await backendAccessPoint.post<GetUserAuthenticationDataBackendResponse>(
        "/user/getUserData",
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

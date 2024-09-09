import { backendAccessPoint } from "../backendAccessPoint";

type GetUserAuthenticationDataBackendResponse = {
  email: string;
  id: string;
  thoughts: string | null;
};

export type User = {
  email: string;
  id: string;
};

export const getUserAuthenticationData = async (): Promise<User> => {
  const { data } =
    await backendAccessPoint.get<GetUserAuthenticationDataBackendResponse>(
      "/user"
    );

  return {
    email: data.email,
    id: data.id,
  };
};

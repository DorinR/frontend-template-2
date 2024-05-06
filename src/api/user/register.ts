import { BackendAccessPoint } from "../backendAccessPoint";

type RegisterBackendResponse = {
  userId: string;
  token: string;
};

type RegisterParams = {
  emailAddress: string;
  password: string;
};

type FnRegister = (params: RegisterParams) => Promise<{ userId: string }>;

export const register: FnRegister = async ({
  emailAddress,
  password,
}: RegisterParams) => {
  const { data } = await BackendAccessPoint.post<RegisterBackendResponse>(
    "/user/register",
    {
      email: emailAddress,
      password: password,
    }
  );

  localStorage.setItem('jwt_token', data.token)

  return { userId: data.userId };
};

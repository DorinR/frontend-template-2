import { backendAccessPoint } from "../backendAccessPoint";

type LoginParams = {
  email: string;
  password: string;
};

type FnLogin = (
  params: LoginParams,
) => Promise<{ userId: string; token: string }>;

type FnLoginBackendResponse = {
  token: string;
  userId: string;
};

export const login: FnLogin = async ({ email, password }) => {
  const { data } = await backendAccessPoint.post<FnLoginBackendResponse>(
    "/user/login",
    {
      email: email,
      password: password,
    },
  );

  return { userId: data.userId, token: data.token };
};

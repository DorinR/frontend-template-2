import { BackendAccessPoint } from "../backendAccessPoint";

type LoginParams = {
  email: string;
  password: string;
};

type FnLogin = (params: LoginParams) => Promise<{ token: string }>;

type FnLoginBackendResponse = {
  token: string;
};

export const login: FnLogin = async ({ email, password }) => {
  const { data } = await BackendAccessPoint.post<FnLoginBackendResponse>(
    "/auth/login",
    {
      email: email,
      password: password,
    }
  );

  localStorage.setItem("authToken", data.token);

  return { token: data.token };
};

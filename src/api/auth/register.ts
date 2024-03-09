import { AxiosClient } from "../axiosClient";

type RegisterBackendResponse = {
  token: string;
};

type RegisterParams = {
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
};

type FnRegister = (params: RegisterParams) => Promise<{ token: string }>;

export const register: FnRegister = async ({
  emailAddress,
  password,
  firstName,
  lastName,
}: RegisterParams) => {
  const { data } = await AxiosClient.post<RegisterBackendResponse>(
    "/auth/register",
    {
      email: emailAddress,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }
  );

  localStorage.setItem("authToken", data.token);

  return { token: data.token };
};

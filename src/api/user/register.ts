import { backendAccessPoint } from "../backendAccessPoint";

type RegisterBackendResponse = {
  userId: string;
  token: string;
};

type RegisterParams = {
  emailAddress: string;
  password: string;
};

type FnRegister = (
  params: RegisterParams,
) => Promise<{ userId: string; token: string }>;

export const register: FnRegister = async ({
  emailAddress,
  password,
}: RegisterParams) => {
  const { data } = await backendAccessPoint.post<RegisterBackendResponse>(
    "/user/register",
    {
      email: emailAddress,
      password: password,
    },
  );

  return { token: data.token, userId: data.userId };
};

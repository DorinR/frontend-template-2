import { BackendAccessPoint } from "../backendAccessPoint";

type RegisterBackendResponse = {
  userId: string;
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

  return { userId: data.userId };
};

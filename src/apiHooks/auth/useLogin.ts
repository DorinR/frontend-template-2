import { useMutation, useQueryClient } from "react-query";
import { login } from "../../api/auth/login";
import { authCacheKey } from "./useGetUserAuthenticationData";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(login, {
    onSettled: () => queryClient.invalidateQueries(authCacheKey),
  });

  return mutateAsync;
};

import { useMutation, useQueryClient } from "react-query";
import { register } from "../../api/auth/register";
import { authCacheKey } from "./useGetUserAuthenticationData";

export const useRegister = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(register, {
    onSettled: () => queryClient.invalidateQueries(authCacheKey),
  });

  return mutateAsync;
};

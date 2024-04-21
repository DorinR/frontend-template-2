import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../api/auth/login";
import { authCacheKey } from "./useGetUserAuthenticationData";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: login,
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [authCacheKey],
      }),
  });

  return mutateAsync;
};

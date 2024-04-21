import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../api/auth/register";
import { authCacheKey } from "./useGetUserAuthenticationData";

export const useRegister = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: register,
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [authCacheKey] }),
  });

  return mutateAsync;
};

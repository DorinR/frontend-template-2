import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../api/user/login";
import { authCacheKey } from "./useGetUserAuthenticationData";

export const useLogin = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [authCacheKey],
      }),
  });

  return { login: mutateAsync, isPending };
};

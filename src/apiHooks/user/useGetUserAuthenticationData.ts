import { useQuery } from "@tanstack/react-query";
import { getUserAuthenticationData } from "../../api/user/getUserAuthenticationData";

export const authCacheKey = "userauth";

export const useGetUserAuthenticationData = () => {
  return useQuery({
    queryKey: [authCacheKey],
    queryFn: getUserAuthenticationData,
  });
};

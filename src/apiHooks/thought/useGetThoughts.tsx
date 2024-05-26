import { useQuery } from "@tanstack/react-query";
import { getThoughts } from "../../api/thought/getThoughts";
import { queryKeys } from "../apiHooksShared/queryKeys";

export const useGetThoughts = () => {
  return useQuery({
    queryFn: getThoughts,
    queryKey: [queryKeys.getThoughts],
  });
};

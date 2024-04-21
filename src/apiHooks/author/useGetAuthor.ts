import { useQuery } from "@tanstack/react-query";
import { getAuthor } from "../../api/author/getAuthor";

export const useGetAuthor = () => {
  const { data } = useQuery({
    queryFn: getAuthor,
    queryKey: ["authorQueryKey"],
  });

  return data;
};

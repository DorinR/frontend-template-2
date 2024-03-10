import { useQuery } from "react-query";
import { getAuthor } from "../../api/author/getAuthor";

export const useGetAuthor = () => {
  const { data } = useQuery("authorQueryKey", getAuthor);

  return data;
};

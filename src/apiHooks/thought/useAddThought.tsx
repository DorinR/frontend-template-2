import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addThought } from "../../api/thought/addThought";
import { queryKeys } from "../apiHooksShared/queryKeys";

export const useAddThought = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addThought,
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [queryKeys.getThoughts] }),
  });

  return mutateAsync;
};

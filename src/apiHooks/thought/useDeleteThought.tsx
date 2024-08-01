import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteThought } from "../../api/thought/deleteThought";
import { queryKeys } from "../apiHooksShared/queryKeys";

export const useDeleteThought = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteThought,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getThoughts] });
    },
  });

  return { deleteThought: mutateAsync, isPending };
};

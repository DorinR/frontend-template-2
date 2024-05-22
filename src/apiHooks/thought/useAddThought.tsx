import { useMutation } from "@tanstack/react-query";
import { addThought } from "../../api/thought/addThought";

export const useAddThought = () => {
  const { mutateAsync } = useMutation({
    mutationFn: addThought,
  });

  return mutateAsync;
};

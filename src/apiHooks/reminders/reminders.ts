import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createReminder } from "../../api/reminders/createReminder";
import { getReminders } from "../../api/reminders/getReminders";
import { updateReminder } from "../../api/reminders/updateReminder";

export const useCreateReminder = () => {
  const { mutateAsync } = useMutation({
    mutationFn: createReminder,
    // onSettled: () => invalidateQueries({ queryKey: ["reminders"] }),
  });

  return mutateAsync;
};

export const useGetReminders = () => {
  return useQuery({
    queryFn: getReminders,
    queryKey: ["reminders"],
  });
};

export const useUpdateReminder = () => {
  const { invalidateQueries } = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: updateReminder,
    onSettled: () => invalidateQueries({ queryKey: ["reminders"] }),
  });

  return mutateAsync;
};

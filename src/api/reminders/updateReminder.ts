import { backendAccessPoint } from "../backendAccessPoint";

type UpdateReminderProps = {
  reminderId: string;
  state: boolean;
};

export const updateReminder = async ({
  reminderId,
  state,
}: UpdateReminderProps) => {
  const { data } = await backendAccessPoint.put<{ reminderId: string }>(
    "reminders/",
    {
      reminderId,
      state,
    },
  );

  return data.reminderId;
};

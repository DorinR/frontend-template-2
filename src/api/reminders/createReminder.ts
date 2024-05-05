import { BackendAccessPoint } from "../backendAccessPoint";

type CreateReminderProps = {
  reminder: string;
};

export const createReminder = async ({ reminder }: CreateReminderProps) => {
  const { data } = await BackendAccessPoint.post<{ createdReminderId: string }>(
    "/reminders",
    {
      reminder,
    }
  );

  return data.createdReminderId;
};

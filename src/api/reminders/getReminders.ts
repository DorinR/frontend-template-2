import { BackendAccessPoint } from "../backendAccessPoint";

type Reminder = {
  id: string;
  title: string;
  isComplete: boolean;
};

export const getReminders = async () => {
  const { data } = await BackendAccessPoint.get<{ reminders: Reminder[] }>(
    "/reminders/"
  );

  return data.reminders;
};

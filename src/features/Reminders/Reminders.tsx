import { Formik } from "formik";
import {
  useCreateReminder,
  useGetReminders,
  useUpdateReminder,
} from "../../apiHooks/reminders/reminders";
import { SubmitButton } from "../Forms/SubmitButton";

export const Reminders = () => {
  const { data } = useGetReminders();
  const createReminder = useCreateReminder();
  const updateReminder = useUpdateReminder();

  return (
    <div>
      <h2>Reminders</h2>
      {data &&
        data.map((reminder) => {
          return (
            <span>
              {reminder.title}:{" "}
              <span
                onClick={async () => {
                  await updateReminder({
                    reminderId: reminder.id,
                    state: !reminder.isComplete,
                  });
                }}
              >
                {reminder.isComplete}
              </span>
            </span>
          );
        })}
      <h2>Create new reminder</h2>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={async (values) => {
          await createReminder({ reminder: values.title });
        }}
      >
        <>
          <input name="title" />
          <SubmitButton label={"add reminders"} />
        </>
      </Formik>
    </div>
  );
};

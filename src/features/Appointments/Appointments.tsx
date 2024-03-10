import { useGetAuthor } from "../../apiHooks/author/useGetAuthor";

export const Appointments = () => {
  const authorData = useGetAuthor();

  return (
    <div>
      <h2>Appointment</h2>
      <p>The appointments page</p>
      {authorData}
    </div>
  );
};

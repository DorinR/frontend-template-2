import { useGetThoughts } from "../../apiHooks/thought/useGetThoughts";

export const Thoughts = () => {
  const { data: thoughtsData } = useGetThoughts();

  if (!thoughtsData) return null;

  return (
    <ul>
      {thoughtsData.thoughts.map((t) => {
        return <li>{t.content}</li>;
      })}
    </ul>
  );
};

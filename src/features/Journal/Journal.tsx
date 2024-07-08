import { useGetThoughts } from "../../apiHooks/thought/useGetThoughts";
import { Thoughts } from "./Thoughts";

export const Journal = () => {
  const { data: thoughtsData } = useGetThoughts();

  if (!thoughtsData) return null;

  return (
    <>
      <h1>Journal</h1>
      <Thoughts />
    </>
  );
};

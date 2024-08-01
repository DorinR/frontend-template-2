import styled from "styled-components";
import { useGetThoughts } from "../../apiHooks/thought/useGetThoughts";
import { CreateThought } from "./CreateThought";
import { Thought } from "./Thought";

export const Thoughts = () => {
  const { data: thoughtsData } = useGetThoughts();

  if (!thoughtsData) return null;

  return (
    <ThoughtsContainer>
      {thoughtsData.thoughts.map((t) => {
        return <Thought key={t.id} thought={t} />;
      })}
      <CreateThought />
    </ThoughtsContainer>
  );
};

const ThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0px 20%;
`;

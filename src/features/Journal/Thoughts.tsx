import { format, parseISO } from "date-fns";
import { groupBy } from "lodash";
import styled from "styled-components";
import { useGetThoughts } from "../../apiHooks/thought/useGetThoughts";
import { CreateThought } from "./CreateThought";
import { Thought } from "./Thought";

export const Thoughts = () => {
  const { data: thoughtsData } = useGetThoughts();

  if (!thoughtsData) return null;

  console.log(thoughtsData);

  const thoughtsGroupedByDay = groupBy(
    thoughtsData.thoughts,
    (thought) => thought.dateCreated.split("T")[0]
  );

  return (
    <ThoughtsContainer>
      {Object.entries(thoughtsGroupedByDay).map(
        ([date, thoughtsForThatDate]) => {
          return (
            <ThoughtsGroup key={date}>
              <div>{format(parseISO(date), "PPP")}</div>
              <ThoughtsGroupContainer>
                {thoughtsForThatDate.map((t) => {
                  return <Thought key={t.id} thought={t} />;
                })}
              </ThoughtsGroupContainer>
            </ThoughtsGroup>
          );
        }
      )}
      <CreateThought />
    </ThoughtsContainer>
  );
};

const ThoughtsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ThoughtsGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ThoughtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0px 20%;
`;

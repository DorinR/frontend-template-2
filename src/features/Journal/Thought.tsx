import { TrashIcon } from "@radix-ui/react-icons";
import { Badge, Box, Card, Text } from "@radix-ui/themes";
import styled from "styled-components";
import { ThoughtDto } from "../../api/thought/getThoughts";
import { useDeleteThought } from "../../apiHooks/thought/useDeleteThought";
import { ConfirmationModal } from "../../components/Modal/ConfirmationModal";

type ThoughtProps = {
  thought: ThoughtDto;
};

export const Thought = ({ thought }: ThoughtProps) => {
  const { deleteThought, isPending } = useDeleteThought();

  return (
    <Box>
      <Card>
        <CardStack>
          <CardInner>
            <Text as="div" color="gray" size="2">
              {thought.content}
            </Text>
            <ConfirmationModal
              label={<TrashIcon />}
              action={() => {
                deleteThought({ thoughtId: thought.id });
              }}
              actionButtonColor="red"
              actionButtonLabel="Delete"
              actionButtonIsPending={isPending}
              confirmationTitle="Delete thought"
              confirmationText="Are you sure you would like to delete this thought?"
            />
          </CardInner>
          <DistortionsContainer>
            {thought.distortions.map((d) => {
              return (
                <Badge color="gray" variant="soft" highContrast key={d.id}>
                  {d.name}
                </Badge>
              );
            })}
          </DistortionsContainer>
        </CardStack>
      </Card>
    </Box>
  );
};

const CardStack = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const DistortionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  flex-wrap: wrap;
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

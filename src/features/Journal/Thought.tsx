import { Box, Button } from "@radix-ui/themes";
import { ThoughtDto } from "../../api/thought/getThoughts";
import { useDeleteThought } from "../../apiHooks/thought/useDeleteThought";

type ThoughtProps = {
  thought: ThoughtDto;
};

export const Thought = ({ thought }: ThoughtProps) => {
  const {deleteThought, isPending} = useDeleteThought();

  return (
    <Box>
      {thought.content}
      <Button
        onClick={() => {
          deleteThought({ thoughtId: thought.id });
        }}
        loading={isPending}
      >
        Delete
      </Button>
    </Box>
  );
};

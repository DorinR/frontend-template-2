import { Box } from "@radix-ui/themes";

type ThoughtProps = {
  content: string;
};

export const Thought = ({ content }: ThoughtProps) => {
  return <Box>{content}</Box>;
};

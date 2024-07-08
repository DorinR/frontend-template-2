import { Card } from "@blueprintjs/core";

type ThoughtProps = {
  content: string;
};

export const Thought = ({ content }: ThoughtProps) => {
  return <Card>{content}</Card>;
};

import { backendAccessPoint } from "../backendAccessPoint";

type GetThoughtsApiResponse = {
  thoughts: {
    id: string;
    content: string;
    dateCreated: string;
  }[];
};

export type ThoughtDto = {
  id: string;
  content: string;
  dateCreated: string;
};

type GetThoughtsResponse = {
  thoughts: ThoughtDto[];
};

export const getThoughts = async () => {
  const { data } =
    await backendAccessPoint.get<GetThoughtsApiResponse>("/Thought/Thoughts");

  const mappedData: GetThoughtsResponse = {
    thoughts: data.thoughts
      ? data.thoughts.map((t) => {
          return {
            id: t.id,
            content: t.content,
            dateCreated: t.dateCreated,
          };
        })
      : [],
  };

  return mappedData;
};

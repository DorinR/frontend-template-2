import { backendAccessPoint } from "../backendAccessPoint";

type GetThoughtsApiResponse = {
  thoughts: {
    id: string;
    content: string;
    dateCreated: string;
  }[];
};

type GetThoughtsResponse = {
  thoughts: {
    id: string;
    content: string;
    dateCreated: string;
  }[];
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

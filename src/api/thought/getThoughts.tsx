import { backendAccessPoint } from "../backendAccessPoint";

type GetThoughtsApiResponse = {
  thoughts: {
    id: string;
    content: string;
    dateCreated: string;
    distortions: {
      id: string;
      name: string;
    }[];
  }[];
};

export type DistortionDto = {
  id: string;
  name: string;
};

export type ThoughtDto = {
  id: string;
  content: string;
  dateCreated: string;
  distortions: DistortionDto[];
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
            distortions: t.distortions,
          };
        })
      : [],
  };

  mappedData.thoughts.sort((a: ThoughtDto, b: ThoughtDto) => {
    const first = new Date(a.dateCreated).getTime();
    const second = new Date(b.dateCreated).getTime();

    return second - first;
  });

  return mappedData;
};

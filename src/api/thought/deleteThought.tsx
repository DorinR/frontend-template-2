import { backendAccessPoint } from "../backendAccessPoint";

type DeleteThoughtParams = {
  thoughtId: string;
};

export const deleteThought = async ({ thoughtId }: DeleteThoughtParams) => {
  const { data } = await backendAccessPoint.delete<{ thoughtId: string }>(
    `/Thought/DeleteThought/${thoughtId}`
  );

  return data.thoughtId;
};

import { backendAccessPoint } from "../backendAccessPoint";

type AddThoughtParams = {
  content: string;
};

type AddThoughtBackendResponse = {
  thoughtId: string;
};

type AddThoughtResponse = {
  thoughtId: string;
};

export const addThought = async ({
  content,
}: AddThoughtParams): Promise<AddThoughtResponse> => {
  // make request
  const { data } = await backendAccessPoint.post<AddThoughtBackendResponse>(
    "thought/add",
    {
      content: content,
    },
  );

  // map to internal type and return
  return {
    thoughtId: data.thoughtId,
  };
};

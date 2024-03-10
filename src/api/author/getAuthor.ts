import { BackendAccessPoint } from "../backendAccessPoint";

export const getAuthor = async () => {
  const { data } = await BackendAccessPoint.get("/author/hello");

  return data;
};

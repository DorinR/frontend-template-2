import { backendAccessPoint } from "../backendAccessPoint";

export const getAuthor = async () => {
  const { data } = await backendAccessPoint.get("/author/hello");

  return data;
};

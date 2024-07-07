import { useMemo, useState } from "react";

/**
 * Note for tomorrow: there is probably some react pattern for this scenario
 * where you want a component to subscribe when some global state in the
 * localstorage changes. Fun exploration to come up with a solution for this.
 */
export const useUserData = () => {
  const [jwt, setJwt] = useState<string | null>(
    localStorage.getItem("jwt_token"),
  );

  const setToken = useMemo(() => {
    return (token: string) => {
      localStorage.setItem("jwt_token", token);
      setJwt(token);
    };
  }, []);

  const clearToken = useMemo(() => {
    return () => {
      localStorage.removeItem("jwt_token");
      setJwt(null);
    };
  }, []);

  return {
    token: jwt,
    setToken,
    clearToken,
  };
};

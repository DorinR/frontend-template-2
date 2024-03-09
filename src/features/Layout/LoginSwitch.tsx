import { Button } from "@blueprintjs/core";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  authCacheKey,
  useGetUserAuthenticationData,
} from "../../apiHooks/auth/useGetUserAuthenticationData";

export const LoginSwitch = () => {
  const { data } = useGetUserAuthenticationData();
  const queryClient = useQueryClient();

  if (!data) return null;

  if (!data.userData.id) {
    return (
      <>
        <Link to="/login">
          <Button icon="log-in" minimal large>
            Login
          </Button>
        </Link>
        <Link to="/create-account">
          <Button icon="new-person" minimal large>
            Create Account
          </Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/account">
          <Button icon="user" minimal large>
            Account
          </Button>
        </Link>
        <Link to="/">
          <Button
            icon="log-out"
            minimal
            large
            onClick={() => {
              localStorage.removeItem("authToken");
              queryClient.invalidateQueries(authCacheKey);
            }}
          >
            Logout
          </Button>
        </Link>
      </>
    );
  }
};

const LoginButtonsContainer = styled.div`
  float: right;
`;

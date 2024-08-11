import {
  EnterIcon,
  ExitIcon,
  PersonIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthStateContext } from "../../context/AuthStateContext";

export const LoginSwitch = () => {
  const authContext = useContext(AuthStateContext);

  if (!authContext) return null;

  const { token, setToken, clearToken } = authContext;

  if (!token) {
    return (
      <StyledSpan>
        <Link to="/login">
          <Button variant="soft">
            <EnterIcon />
            Login
          </Button>
        </Link>
        <Link to="/create-account">
          <Button variant="soft">
            <PlusIcon />
            Create Account
          </Button>
        </Link>
      </StyledSpan>
    );
  } else {
    return (
      <StyledSpan>
        <Link to="/account">
          <Button variant="soft">
            <PersonIcon />
            Account
          </Button>
        </Link>
        <Link to="/">
          <Button
            variant="soft"
            onClick={() => {
              clearToken();
            }}
          >
            <ExitIcon />
            Logout
          </Button>
        </Link>
      </StyledSpan>
    );
  }
};

const StyledSpan = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

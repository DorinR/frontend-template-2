import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { AuthStateContext } from "../../context/AuthStateContext";
import { useContext } from "react";

export const LoginSwitch = () => {
  const authContext = useContext(AuthStateContext);

  if (!authContext) return null;

  const { token, setToken, clearToken } = authContext;

  if (!token) {
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
              clearToken();
            }}
          >
            Logout
          </Button>
        </Link>
      </>
    );
  }
};

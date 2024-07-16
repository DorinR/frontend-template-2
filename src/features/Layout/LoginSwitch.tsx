import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStateContext } from "../../context/AuthStateContext";

export const LoginSwitch = () => {
  const authContext = useContext(AuthStateContext);

  if (!authContext) return null;

  const { token, setToken, clearToken } = authContext;

  if (!token) {
    return (
      <>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/create-account">
          <Button>Create Account</Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/account">
          <Button>Account</Button>
        </Link>
        <Link to="/">
          <Button
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

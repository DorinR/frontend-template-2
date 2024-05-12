import { Button } from "@blueprintjs/core";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../apiHooks/user/useLogin";
import { CenteredCard } from "../../../components/Card/CenteredCard";
import { TextInput } from "../../../components/Form/Input/TextInput";
import * as yup from "yup";
import { useContext } from "react";
import { AuthStateContext } from "../../../context/AuthStateContext";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const Login = () => {
  const { login, isPending } = useLogin();
  const navigate = useNavigate();
  const authStateContext = useContext(AuthStateContext);

  if (!authStateContext) return null;

  const { setToken } = authStateContext;

  return (
    <CenteredCard title="login">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const { token } = await login(values);
            setToken(token);
            navigate("/");
          } catch {
            console.log("error");
          }
        }}
        validationSchema={LoginSchema}
      >
        {(props) => (
          <Form>
            <TextInput
              label="Email Address"
              placeholder="enter your email address"
              name="email"
              onChangeHandler={props.handleChange}
            />
            <TextInput
              label="Password"
              placeholder="enter your password"
              name="password"
              type="password"
              onChangeHandler={props.handleChange}
            />
            <Button
              type="submit"
              intent="primary"
              fill
              large
              loading={isPending}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </CenteredCard>
  );
};

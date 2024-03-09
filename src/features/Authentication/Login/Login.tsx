import { Button } from "@blueprintjs/core";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../apiHooks/auth/useLogin";
import { CenteredCard } from "../../../components/Card/CenteredCard";
import { TextInput } from "../../../components/Form/Input/TextInput";
import * as yup from "yup";

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
  const login = useLogin();
  const navigate = useNavigate();

  return (
    <CenteredCard title="login">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await login(values);
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
            <Button type="submit" intent="primary" fill large>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </CenteredCard>
  );
};

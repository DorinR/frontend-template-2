import { Button, Flex } from "@radix-ui/themes";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useLogin } from "../../../apiHooks/user/useLogin";
import { CenteredCard } from "../../../components/Card/CenteredCard";
import { AuthStateContext } from "../../../context/AuthStateContext";
import { FormInput } from "../../Forms/FormInput";

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
            navigate("/journal");
          } catch {
            console.log("error");
          }
        }}
        validationSchema={LoginSchema}
      >
        {(props) => (
          <Form>
            <Flex gap="5" direction="column">
              <FormInput
                label="Email Address"
                placeholder="enter your email address"
                name="email"
              />
              <FormInput
                label="Password"
                placeholder="enter your password"
                name="password"
                isPassword
              />
              <Button type="submit" loading={isPending}>
                Login
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </CenteredCard>
  );
};

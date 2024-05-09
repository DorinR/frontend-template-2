import { Button } from "@blueprintjs/core";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useRegister } from "../../../apiHooks/user/useRegister";
import { CenteredCard } from "../../../components/Card/CenteredCard";
import { TextInput } from "../../../components/Form/Input/TextInput";
import { useContext } from "react";
import { AuthStateContext } from "../../../context/AuthStateContext";

const RegisterSchema = yup.object().shape({
  emailAddress: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password must be at least 6 characters long."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const Register = () => {
  const register = useRegister();
  const navigate = useNavigate();
  const authStateContext = useContext(AuthStateContext);

  if (!authStateContext) return null;

  const { setToken } = authStateContext;

  return (
    <CenteredCard title="create account">
      <Formik
        initialValues={{
          emailAddress: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            const { token } = await register(values);
            setToken(token);
            navigate("/");
          } catch {
            console.log("error");
          }
        }}
        validationSchema={RegisterSchema}
      >
        {(props) => (
          <Form>
            <TextInput
              label="Email address"
              placeholder="enter your email address"
              name="emailAddress"
              onChangeHandler={props.handleChange}
            />
            <TextInput
              label="Password"
              placeholder="enter your password"
              name="password"
              type="password"
              onChangeHandler={props.handleChange}
            />
            <TextInput
              label="Confirm password"
              placeholder="enter your password again"
              name="passwordConfirm"
              type="password"
              onChangeHandler={props.handleChange}
            />
            <Button type="submit" intent="primary" fill large>
              Create account
            </Button>
          </Form>
        )}
      </Formik>
    </CenteredCard>
  );
};

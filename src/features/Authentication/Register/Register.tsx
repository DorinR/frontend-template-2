import { Button } from "@radix-ui/themes";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useRegister } from "../../../apiHooks/user/useRegister";
import { CenteredCard } from "../../../components/Card/CenteredCard";
import { AuthStateContext } from "../../../context/AuthStateContext";
import { FormInput } from "../../Forms/FormInput";

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
  const { register, isPending } = useRegister();
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
            <FormInput label="Email address" name="emailAddress" />
            <FormInput label="Password" name="password" isPassword />
            <FormInput
              label="Confirm password"
              name="passwordConfirm"
              isPassword
            />
            <Button type="submit" loading={isPending}>
              Create account
            </Button>
          </Form>
        )}
      </Formik>
    </CenteredCard>
  );
};

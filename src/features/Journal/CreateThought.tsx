import { Card } from "@blueprintjs/core";
import { Formik } from "formik";
import { get } from "lodash";
import styled from "styled-components";
import { useAddThought } from "../../apiHooks/thought/useAddThought";
import { FormInput } from "../Forms/FormInput";
import { SubmitButton } from "../Forms/SubmitButton";

export const CreateThought = () => {
  const createThought = useAddThought();

  return (
    <Card>
      <Formik
        initialValues={{ thought: "" }}
        onSubmit={async (values) => {
          console.log(values);

          await createThought({ content: values.thought });
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};

          const thoughtValue = get(values, "thought", "");
          if (thoughtValue === "") {
            errors["thought"] = "field required";
          }
          return errors;
        }}
      >
        <Stack>
          <FormInput name="thought" />
          <SubmitButton label="Create new entry" />
        </Stack>
      </Formik>
    </Card>
  );
};

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

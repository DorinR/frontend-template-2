import { Field, Formik } from "formik";
import { useAddThought } from "../../apiHooks/thought/useAddThought";
import { SubmitButton } from "../Forms/SubmitButton";
import { useGetThoughts } from "../../apiHooks/thought/useGetThoughts";
import { Thoughts } from "./Thoughts";

export const Journal = () => {
  const addThought = useAddThought();
  const { data: thoughtsData } = useGetThoughts();

  if (!thoughtsData) return null;

  return (
    <>
      <h1>Journal</h1>
      <Formik
        initialValues={{ content: "" }}
        onSubmit={async (values) => {
          await addThought({
            content: values.content,
          });
        }}
      >
        <>
          <label htmlFor={"content"}>thought</label>
          <Field id="content" name="content" />
          <SubmitButton label={"Submit"} />
        </>
      </Formik>
      <Thoughts />
    </>
  );
};

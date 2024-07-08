import { Button } from "@blueprintjs/core";
import { useFormikContext } from "formik";

export const SubmitButton = ({ label }: { label?: string }) => {
  const { submitForm } = useFormikContext();

  return (
    <Button
      intent="primary"
      onClick={() => {
        submitForm();
      }}
    >
      {label ?? "Submit"}
    </Button>
  );
};

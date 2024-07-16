import { Button } from "@radix-ui/themes";
import { useFormikContext } from "formik";

export const SubmitButton = ({ label }: { label?: string }) => {
  const { submitForm } = useFormikContext();

  return (
    <Button
      onClick={() => {
        submitForm();
      }}
    >
      {label ?? "Submit"}
    </Button>
  );
};

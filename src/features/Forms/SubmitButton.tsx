import { useFormikContext } from "formik";
import React from "react";

export const SubmitButton = ({ label }: { label?: string }) => {
  const { submitForm } = useFormikContext();

  return (
    <button
      onClick={() => {
        submitForm();
      }}
    >
      {label ?? "Submit"}
    </button>
  );
};

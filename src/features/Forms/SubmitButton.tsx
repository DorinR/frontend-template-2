import { useFormikContext } from "formik";
import React from "react";

export const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { submitForm } = useFormikContext();

  return (
    <button
      onClick={() => {
        submitForm();
      }}
    >
      {children}
    </button>
  );
};

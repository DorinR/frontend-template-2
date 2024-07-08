import { InputGroup } from "@blueprintjs/core";
import { useField } from "formik";
import styled from "styled-components";

export const FormInput = ({ name }: { name: string }) => {
  const [field, meta, helpers] = useField(name);
  console.log(meta.error);

  return (
    <>
      <InputGroup {...field} name={name} />
      {meta.error && <StyledSpan>{meta.error}</StyledSpan>}
    </>
  );
};

const StyledSpan = styled.span`
  color: red;
`;

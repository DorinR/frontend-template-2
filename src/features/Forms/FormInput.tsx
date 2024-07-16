import { useField } from "formik";
import styled from "styled-components";
import { TextInput } from "../../components/ControlledComponents/TextInput";

export const FormInput = ({
  name,
  label,
  isPassword,
  placeholder,
}: {
  name: string;
  label: string;
  isPassword?: boolean;
  placeholder?: string;
}) => {
  const [field, meta, helpers] = useField(name);
  console.log(meta.error);

  return (
    <>
      <TextInput
        name={name}
        value={field.value}
        setValue={field.onChange}
        label={label}
        placeholder={placeholder}
        isPassword={isPassword ?? false}
      />
      {meta.error && <StyledSpan>{meta.error}</StyledSpan>}
    </>
  );
};

const StyledSpan = styled.span`
  color: red;
`;

import { Text, TextField } from "@radix-ui/themes";
import { ChangeEventHandler } from "react";

type TextInputProps = {
  label: string;
  value: string;
  setValue: ChangeEventHandler<HTMLInputElement>;
  isPassword: boolean;
  placeholder?: string;
};

export const TextInput = ({
  value,
  setValue,
  label,
  isPassword,
  placeholder,
}: TextInputProps) => {
  return (
    <>
      <Text as="label">{label}</Text>
      <TextField.Root
        placeholder={placeholder ?? undefined}
        value={value}
        onChange={setValue}
        type={isPassword ? "password" : undefined}
      />
    </>
  );
};

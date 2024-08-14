import { Flex, Text, TextField } from "@radix-ui/themes";
import { ChangeEventHandler } from "react";

type TextInputProps = {
  name: string;
  label: string;
  value: string;
  setValue: ChangeEventHandler<HTMLInputElement>;
  isPassword: boolean;
  placeholder?: string;
};

export const TextInput = ({
  name,
  value,
  setValue,
  label,
  isPassword,
  placeholder,
}: TextInputProps) => {
  return (
    <Flex gap="1" direction="column">
      <Text as="label">{label}</Text>
      <TextField.Root
        name={name}
        placeholder={placeholder ?? undefined}
        value={value}
        onChange={setValue}
        type={isPassword ? "password" : undefined}
      />
    </Flex>
  );
};

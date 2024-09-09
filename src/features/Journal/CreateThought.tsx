import { PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex } from "@radix-ui/themes";
import { Formik } from "formik";
import { get } from "lodash";
import styled from "styled-components";
import { useAddThought } from "../../apiHooks/thought/useAddThought";
import { FormInput } from "../Forms/FormInput";
import { SubmitButton } from "../Forms/SubmitButton";

export const CreateThought = () => {
  const createThought = useAddThought();

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="4">
          <PlusIcon />
          New Entry
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>New Entry</Dialog.Title>
        {/* <Dialog.Description size="2" mb="4">
          What's on your mind?
        </Dialog.Description> */}
        <Box>
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
              <FormInput name="thought" label="What's on your mind?" />
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Back
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  {/* <Button>Save</Button> */}
                  <SubmitButton label="Save" />
                </Dialog.Close>
              </Flex>
            </Stack>
          </Formik>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

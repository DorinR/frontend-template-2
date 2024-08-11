import { AlertDialog, Button, ButtonProps, Flex } from "@radix-ui/themes";
import React from "react";

type ConfirmationModalProps = {
  label: string | React.ReactNode;
  confirmationTitle: string;
  confirmationText: string;
  actionButtonColor: ButtonProps["color"];
  actionButtonLabel: string;
  actionButtonIsPending: boolean | undefined;
  action: () => void;
};

export const ConfirmationModal = ({
  label,
  confirmationTitle,
  confirmationText,
  actionButtonColor,
  actionButtonLabel,
  actionButtonIsPending,
  action,
}: ConfirmationModalProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" variant="soft">
          {label}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{confirmationTitle}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {confirmationText}
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color={actionButtonColor}
              onClick={action}
              loading={actionButtonIsPending}
            >
              {actionButtonLabel}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

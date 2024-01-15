"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" className="whitespace-nowrap">
          حذف مسئله
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>حذف را تایید کنید</AlertDialog.Title>
        <AlertDialog.Description>
          آیا از حذف کردن این مسئله مطمئن هستید؟ این عملیات غیرقابل برگشت است!
        </AlertDialog.Description>
        <Flex gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray" mt="4">
              لغو
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              color="red"
              mt="4"
              onClick={async () => {
                await axios.delete(`/api/issues/${issueId}`);
                router.push("/issues");
                router.refresh();
              }}
            >
              حذف مسئله
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;

"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const deleteIssue = async () => {
    try {
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
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
              <Button color="red" mt="4" onClick={deleteIssue}>
                حذف مسئله
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>خطایی رخ داده است!</AlertDialog.Title>
          <AlertDialog.Description>
            مسئله مورد نظر حذف نشد!
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            تایید
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;

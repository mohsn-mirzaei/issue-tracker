"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/app/components/Skeleton";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 1000 * 60, //60s
    retry: 3,
  });

  if (error) return null;

  if (isLoading) return <Skeleton />;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || ""}
        onValueChange={(userId) => {
          axios
            .patch(`/api/issues/${issue.id}`, {
              assignedToUserId: userId || null,
            })
            .then(() => toast.success("تغییر با موفقیت اعمال شد."))
            .catch(() => toast.error("تغییر اعمال نشد!"));
        }}
      >
        <Select.Trigger placeholder="اختصاص دادن به..." dir="ltr" />
        <Select.Content>
          <Select.Group>
            <Select.Label>پیشنهادات</Select.Label>
            <Select.Item value="">هیچکدام</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;

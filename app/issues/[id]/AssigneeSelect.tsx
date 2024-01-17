"use client";

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/app/components/Skeleton";

const AssigneeSelect = () => {
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
    <Select.Root>
      <Select.Trigger placeholder="اختصاص دادن به..." dir="ltr" />
      <Select.Content>
        <Select.Group>
          <Select.Label>پیشنهادات</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;

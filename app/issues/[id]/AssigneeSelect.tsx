"use client";

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import axios from "axios";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder="اختصاص دادن به..." dir="ltr" />
      <Select.Content>
        <Select.Group>
          <Select.Label>پیشنهادات</Select.Label>
          {users.map((user) => (
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

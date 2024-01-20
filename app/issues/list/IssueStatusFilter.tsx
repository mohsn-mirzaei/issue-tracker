"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const IssueStatusFilter = () => {
  const router = useRouter();

  const statuses: { label: string; value?: Status }[] = [
    { label: "همه" },
    { label: "باز", value: "OPEN" },
    { label: "در حال انجام", value: "IN_PROGRESS" },
    { label: "بسته", value: "CLOSED" },
  ];

  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status ? `?status=${status}` : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="فیلتر بر اساس..." dir="rtl" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.label} value={status.value || ""}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;

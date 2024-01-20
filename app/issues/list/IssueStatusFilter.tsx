"use client";

import React from "react";
import { Select } from "@radix-ui/themes";
import { Status } from "@prisma/client";
import { stat } from "fs";

const IssueStatusFilter = () => {
  const statuses: { label: string; value?: Status }[] = [
    { label: "همه" },
    { label: "باز", value: "OPEN" },
    { label: "در حال انجام", value: "IN_PROGRESS" },
    { label: "بسته", value: "CLOSED" },
  ];

  return (
    <Select.Root>
      <Select.Trigger placeholder="فیلتر بر اساس..." dir="rtl" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || ""}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;

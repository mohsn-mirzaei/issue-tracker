"use client";

import { Select } from "@radix-ui/themes";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="اختصاص دادن به..." dir="ltr" />
      <Select.Content>
        <Select.Group>
          <Select.Label>پیشنهادات</Select.Label>
          <Select.Item value="1">Mohsen Mirzaei</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;

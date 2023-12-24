"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="موضوع" />
      </TextField.Root>
      <TextArea placeholder="توضیحات" />
      <Button>ثبت مسئله جدید</Button>
    </div>
  );
};

export default NewIssuePage;

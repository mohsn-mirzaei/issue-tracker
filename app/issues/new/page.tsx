"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="موضوع" />
      </TextField.Root>
      <SimpleMDE className="text-right" placeholder="توضیحات" />
      <Button>ثبت مسئله جدید</Button>
    </div>
  );
};

export default NewIssuePage;

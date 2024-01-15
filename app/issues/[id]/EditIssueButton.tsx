import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`} className="whitespace-nowrap">
        ویرایش مسئله
      </Link>
      <Pencil2Icon />
    </Button>
  );
};

export default EditIssueButton;

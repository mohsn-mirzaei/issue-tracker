import { Button } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red" className="whitespace-nowrap">
      حذف مسئله
    </Button>
  );
};

export default DeleteIssueButton;

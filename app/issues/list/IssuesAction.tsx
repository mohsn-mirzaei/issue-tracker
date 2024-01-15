import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesAction = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">مسئله جدید</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;

import { Skeleton } from "@/app/components";
import { Card, Flex } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <>
      <Skeleton className="max-w-xl" />
      <Flex gap="2" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4" dir="auto">
        <Skeleton count={3} />
      </Card>
    </>
  );
};

export default LoadingIssueDetailPage;

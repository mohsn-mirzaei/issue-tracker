import { IssueStatusBadge } from "@/app/components";
import persianData from "@/app/persianData";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="2" my="2">
        <Text>{persianData(issue.createdAt)}</Text>
        <IssueStatusBadge status={issue.status} />
      </Flex>
      <Card className="prose max-w-full" mt="4" dir="auto">
        <ReactMarkdown className="px-4">{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;

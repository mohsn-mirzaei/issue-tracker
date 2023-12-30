import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import persianData from "@/app/persianData";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="2" my="2">
        <Text>{persianData(issue.createdAt)}</Text>
        <IssueStatusBadge status={issue.status} />
      </Flex>
      <Card className="prose" mt="4" dir="auto">
        <ReactMarkdown children={issue.description} className="px-4" />
      </Card>
    </>
  );
};

export default IssueDetailPage;

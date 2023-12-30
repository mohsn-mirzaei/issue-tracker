import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import persianData from "@/app/persianData";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

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
      <Card>
        <Text>{issue.description}</Text>
      </Card>
    </>
  );
};

export default IssueDetailPage;

import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import persianData from "@/app/persianData";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="2" my="2">
          <Text>{persianData(issue.createdAt)}</Text>
          <IssueStatusBadge status={issue.status} />
        </Flex>
        <Card className="prose" mt="4" dir="auto">
          <ReactMarkdown children={issue.description} className="px-4" />
        </Card>
      </Box>
      <Box>
        <Button>
          <Link href={`/issues/${issue.id}/edit`}>ویرایش مسئله</Link>
          <Pencil2Icon />
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;

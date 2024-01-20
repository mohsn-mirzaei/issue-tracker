import prisma from "@/prisma/client";
import { Table, TableBody } from "@radix-ui/themes";
import { IssueStatusBadge, Link } from "@/app/components";
import persianData from "../../persianData";
import IssuesAction from "./IssuesAction";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}

const issuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    {
      label: "ساخته شده",
      value: "createdAt",
      className: "hidden md:table-cell",
    },
    { label: "وضعیت", value: "status", className: "hidden md:table-cell" },
    { label: "مسئله", value: "title" },
  ];

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma?.issue.findMany({
    where: { status },
    orderBy,
  });

  return (
    <div>
      <IssuesAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                align="right"
                className={column.className}
              >
                <NextLink
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.value === searchParams.orderBy && (
                    <ArrowUpIcon className="inline" />
                  )}
                  {column.label}
                </NextLink>
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <TableBody>
          {issues?.map((issue) => {
            const date = persianData(issue.createdAt);
            return (
              <Table.Row key={issue.id}>
                <Table.Cell align="right" className="hidden md:table-cell">
                  {date}
                </Table.Cell>
                <Table.Cell align="right" className="hidden md:table-cell">
                  <IssueStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell align="right">
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <div className="block md:hidden">
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </TableBody>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default issuesPage;

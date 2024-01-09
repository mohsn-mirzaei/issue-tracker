import prisma from "@/prisma/client";
import { Table, TableBody } from "@radix-ui/themes";
import { IssueStatusBadge, Link } from "@/app/components";
import persianData from "../persianData";
import IssuesAction from "./IssuesAction";

const issuesPage = async () => {
  const issues = await prisma?.issue.findMany();

  return (
    <div>
      <IssuesAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell
              align="right"
              className="hidden md:table-cell"
            >
              ساخته شده
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell
              align="right"
              className="hidden md:table-cell"
            >
              وضعیت
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="right">مسئله</Table.ColumnHeaderCell>
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

export default issuesPage;

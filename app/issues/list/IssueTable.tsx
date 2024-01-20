import { IssueStatusBadge } from "@/app/components";
import persianData from "@/app/persianData";
import { Issue } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table, TableBody } from "@radix-ui/themes";
import { default as Link, default as NextLink } from "next/link";
import { IssueQuery } from "./page";

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
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
  );
};

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  {
    label: "ساخته شده",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
  { label: "وضعیت", value: "status", className: "hidden md:table-cell" },
  { label: "مسئله", value: "title" },
];

export const columnsName = columns.map((column) => column.value);

export default IssueTable;

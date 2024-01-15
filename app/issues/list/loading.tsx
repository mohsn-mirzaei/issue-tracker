import { Skeleton } from "@/app/components";
import { Table, TableBody } from "@radix-ui/themes";
import IssuesAction from "./IssuesAction";

const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5];

  return (
    <>
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
            return (
              <Table.Row key={issue}>
                <Table.Cell align="right" className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell align="right" className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell align="right">
                  <Skeleton />
                  <div className="block md:hidden">
                    <Skeleton />
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </TableBody>
      </Table.Root>
    </>
  );
};

export default LoadingIssuePage;

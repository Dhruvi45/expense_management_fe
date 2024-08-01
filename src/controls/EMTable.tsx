import { Table } from 'rsuite';
import moment from 'moment';

const { Column, HeaderCell, Cell } = Table;

interface Props {

}

interface Column {
  key: string;
  label: string;
  width?: number;
  fixed?: boolean;
  sortable?: boolean;
  flexGrow?: number;
  resizable?: boolean;
  align?: "center" | "left" | "right" | undefined;
  totalRecords?: number;
  IsColumnGroup?: boolean;
  ColumnGroups?: any;
}
export default function EMTable(props: any) {
  const { data, columns } = props
  return (
    <>
      <Table
        height={400}
        data={data}
      >
        {columns.map((column: Column) => {
          console.log('columns', columns)
          return (
            <Column
              key={column.key}
              width={column.width}
              fixed={column.fixed}
              sortable={column.sortable}
              flexGrow={column.flexGrow}
              resizable={column.resizable}
              align={column.align}>
              <HeaderCell>{column.label}</HeaderCell>
              {column.key === 'date' ?
                <Cell dataKey={column.key} >
                  {rowData => (
                    moment(new Date(rowData.date).toString()).format('LLLL')
                  )}
                </Cell>
                :
                <Cell dataKey={column.key} />
              }
            </Column>
          );
        })}
      </Table>
    </>
  )
}

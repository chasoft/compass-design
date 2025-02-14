import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  GroupingState,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

import React, {useEffect, useState} from 'react'
import Progress from '../progress'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {ExpandableRow} from './expandable/ExpandableRow'
import LoadingComponent from './loading/loading-component'
import TableV2Cell from './table-v2-cell'
import TableV2Checkbox from './table-v2-checkbox'
import TableV2CheckboxCell from './table-v2-checkbox-cell'
import TableV2ColumnHeader from './table-v2-column-header'
import TableV2Footer from './table-v2-footer'
import TableV2HeaderRow from './table-v2-header-row'
import {NoDataComponent} from './table-v2-nodata'
import ProgressPercentage from './table-v2-progress'
import TableV2Row from './table-v2-row'
import TableV2RowGroup from './table-v2-row-group'
import TableV2Toolbar from './table-v2-toolbar'
import {StyledTableV2, StyledTableV2Wrapper} from './table-v2.styles'

export interface Options<TData> {
  enableSorting?: boolean
  enableMultiSort?: boolean
  manualSorting?: boolean
  manualFiltering?: boolean
  columnResizeMode?: 'onChange' | 'onEnd'
  initialSortBy?: SortingState
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean)
}

export type OptionType<TData> = Options<TData>

export interface Props<T> extends StyledComponentProps {
  data: T[]
  columns: Array<ColumnDef<T>>
  options: OptionType<T>
  onManualSorting?: (sortingField: SortingState) => void
  onManualFilter?: (filter: ColumnFiltersState) => void
  onChangeRowSelection?: (selectionRows: T[]) => void
  children: React.ReactNode
  onUpdateData?: (newData: object) => void
  renderRowSubComponent?: (row: T) => React.JSX.Element
  isLoading?: boolean
  loadingIndicator?: React.ReactNode
}

export type ReactTableProps<T = any> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const ReactTable = React.forwardRef<HTMLTableElement, ReactTableProps>(
  (props, ref) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [rowSelection, setRowSelection] = useState({})
    const [grouping, setGrouping] = React.useState<GroupingState>([])

    const {
      // StyledComponentProps
      css = {},
      data,
      columns,
      options,
      onManualSorting,
      onManualFilter,
      onChangeRowSelection,
      onUpdateData,
      renderRowSubComponent,
      isLoading,
      loadingIndicator = <Progress.Circular variant='indeterminate' />,
      children,
      // HTMLDiv Props
      ...delegated
    } = props

    const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
      typeof TableV2Toolbar
    >(children, TableV2Toolbar)

    const {child: footer} = pickChild<typeof TableV2Footer>(
      childrenWithoutToolbar,
      TableV2Footer,
    )

    const tableRef = useDOMRef<HTMLTableElement>(ref)

    const table = useReactTable({
      state: {
        columnFilters,
        grouping,
        rowSelection,
        sorting: options.initialSortBy ? options.initialSortBy : sorting,
      },
      onColumnFiltersChange: setColumnFilters,
      onGroupingChange: setGrouping,
      getExpandedRowModel: getExpandedRowModel(),
      getGroupedRowModel: getGroupedRowModel(),
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onRowSelectionChange: setRowSelection,
      debugTable: true,
      data: data,
      columns: columns,
      isMultiSortEvent: () => true,
      //enable sorting
      ...options,
    })

    useEffect(() => {
      const selectedRowModel = table.getSelectedRowModel().rows
      const selectedRowOriginals = selectedRowModel.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return item.original
      })
      onChangeRowSelection?.(selectedRowOriginals)
    }, [rowSelection])

    useEffect(() => {
      onManualSorting?.(sorting)
    }, [sorting])

    useEffect(() => {
      onManualFilter?.(columnFilters)
    }, [columnFilters])

    const tableRows = table.getRowModel().rows ?? []

    return (
      <StyledTableV2Wrapper css={css} {...delegated}>
        {toolbar && <>{toolbar}</>}
        <StyledTableV2>
          <table ref={tableRef} role='table'>
            <TableV2RowGroup as='thead'>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableV2HeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableV2ColumnHeader
                        key={header.id}
                        headerProps={header}
                        tableOption={table}
                      />
                    )
                  })}
                </TableV2HeaderRow>
              ))}
            </TableV2RowGroup>
            {
              <TableV2RowGroup as='tbody'>
                {tableRows.length ? (
                  tableRows.map((row) => {
                    return (
                      <>
                        <TableV2Row
                          key={row.id}
                          isSelected={row.getIsSelected()}
                          isExpanded={row.getIsExpanded()}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <TableV2Cell
                                key={cell.id}
                                cell={cell}
                                row={row}
                              />
                            )
                          })}
                        </TableV2Row>
                        <ExpandableRow
                          colSpan={table.getAllLeafColumns()?.length}
                          isExpanded={
                            row.getIsExpanded() &&
                            renderRowSubComponent !== undefined
                          }
                        >
                          {renderRowSubComponent?.(row.original)}
                        </ExpandableRow>
                      </>
                    )
                  })
                ) : isLoading ? (
                  <LoadingComponent
                    colSpan={table.getAllLeafColumns()?.length}
                    loadingIndicator={loadingIndicator}
                  />
                ) : (
                  <NoDataComponent
                    colSpan={table.getAllLeafColumns()?.length}
                  ></NoDataComponent>
                )}
              </TableV2RowGroup>
            }
          </table>
        </StyledTableV2>
        {footer && <>{footer}</>}
      </StyledTableV2Wrapper>
    )
  },
)

export default ReactTable as typeof ReactTable & {
  Toolbar: typeof TableV2Toolbar
  Footer: typeof TableV2Footer
  Checkbox: typeof TableV2Checkbox
  CheckboxCell: typeof TableV2CheckboxCell
  ProgressPercentage: typeof ProgressPercentage
}

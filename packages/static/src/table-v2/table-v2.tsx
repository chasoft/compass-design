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
import {useDOMRef} from '../utils/use-dom-ref'

import ExpandableRow from '../table/expandable/expandable-row'
import LoadingComponent from '../table/loading/loading-component'
import styles from '../table/styles/table.module.css'
import TableCell from '../table/table-cell'
import TableCheckbox from '../table/table-checkbox'
import TableCheckboxCell from '../table/table-checkbox-cell'
import TableColumnHeader from '../table/table-column-header'
import TableFooter from '../table/table-footer'
import TableHeaderRow from '../table/table-header-row'
import {NoDataComponent} from '../table/table-nodata'
import ProgressPercentage from '../table/table-progress'
import TableRow from '../table/table-row'
import TableToolbar from '../table/table-toolbar'
import CssInjection from '../utils/objectToCss/CssInjection'

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

export interface Props<T> {
  data: unknown[]
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
  className?: string
  css?: unknown
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TableProps<T = any> = Props<T> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<T>>

const TableV2 = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
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
    renderRowSubComponent,
    isLoading,
    loadingIndicator = <Progress.Circular variant='indeterminate' />,
    children,
    // HTMLDiv Props
    ...htmlProps
  } = props

  const {child: toolbar, rest: childrenWithoutToolbar} = pickChild<
    typeof TableToolbar
  >(children, TableToolbar)

  const {child: footer} = pickChild<typeof TableFooter>(
    childrenWithoutToolbar,
    TableFooter,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: columns as ColumnDef<any, unknown>[],
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
    <CssInjection css={css} childrenRef={tableRef}>
      <div {...htmlProps}>
        {toolbar && <>{toolbar}</>}
        <div className={styles.cdgTableContainer}>
          <table ref={tableRef} role='table' className={styles.cdgTable}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableColumnHeader
                        key={header.id}
                        headerProps={header}
                        tableOption={table}
                      />
                    )
                  })}
                </TableHeaderRow>
              ))}
            </thead>
            {
              <tbody>
                {tableRows.length ? (
                  tableRows.map((row) => {
                    return (
                      <>
                        <TableRow
                          key={row.id}
                          isSelected={row.getIsSelected()}
                          isExpanded={row.getIsExpanded()}
                        >
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <TableCell key={cell.id} cell={cell} row={row} />
                            )
                          })}
                        </TableRow>
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
              </tbody>
            }
          </table>
        </div>
        {footer && <>{footer}</>}
      </div>
    </CssInjection>
  )
})

export default TableV2 as typeof TableV2 & {
  Toolbar: typeof TableToolbar
  Footer: typeof TableFooter
  Checkbox: typeof TableCheckbox
  CheckboxCell: typeof TableCheckboxCell
  ProgressPercentage: typeof ProgressPercentage
}

export type TableProps<T> = {
  columns: {
    dataIndex: string
    title: string
    render?: (data: any) => string
  }[]
  dataSource: T[]
}

/**
 * @description render markdown table
 */
export const table = <T>(props: TableProps<T>) => {
  const len = props.columns.length
  const tableHeader = new Array(len)
    .fill(0)
    .map((_v, i) => {
      return `|${props.columns[i].title}`
    })
    .concat('|')
    .join('')
  const fixedRow = new Array(len)
    .fill(0)
    .map(() => {
      return `|${new Array(5).fill('-').join('')}`
    })
    .concat('|')
    .join('')
  const rows = props.dataSource
    .map((v) => {
      const row = props.columns
        .map((col) => `|${col.render?.(col.dataIndex ? v[col.dataIndex] : v) || v[col.dataIndex]}`)
        .concat('|')
        .join('')
      return row
    })
    .join('\n')
  return [tableHeader, fixedRow, rows].join('\n')
}

import { useState } from 'react'
import { Column, Ticket } from '../../types'
import styles from './tableList.module.css'
import ColumnHeader from './ColumnHeader'

interface TableProps {
  columns: readonly Column[]
  rows: Ticket[]
  rowHeight: number
  maxHeight: number
}

export default function TableList({ columns, rows, rowHeight, maxHeight }: TableProps) {
  const visibleRowCount = Math.ceil(maxHeight / rowHeight) // Number of rows visible at a time

  const [startIndex, setStartIndex] = useState(0) // Index of the first visible row
  const [endIndex, setEndIndex] = useState(visibleRowCount) // Index of the last visible row -  Initialize endIndex based on visible rows

  const totalHeight = rows.length * rowHeight // Total height of all rows

  function handleScroll<T extends HTMLElement>(event: React.UIEvent<T>) {
    const scrollTop = event.currentTarget.scrollTop
    const currentStartIndex = Math.floor(scrollTop / rowHeight) // Calculate first visible row
    setStartIndex(currentStartIndex)
    setEndIndex(currentStartIndex + visibleRowCount + 1) // Add one extra row for smooth scrolling
  }

  const renderRows = () => {
    return rows.slice(startIndex, endIndex).map((row) => (
      <tr key={row.id} style={{ height: `${rowHeight}px` }}>
        {columns.map((column) => (
          <td key={`${row.id}-${column.id}`}>{row[column.id]}</td>
        ))}
      </tr>
    ))
  }

  return (
    <div className={styles.container}>
      <div>
        <table className={styles.tableList}>
          <ColumnHeader columns={columns} />
        </table>
      </div>
      <div
        style={{
          maxHeight: `${maxHeight}px`,
          overflowY: 'scroll'
        }}
        onScroll={(e) => handleScroll<HTMLDivElement>(e)}
      >
        <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
          <table
            className={styles.tableList}
            style={{
              position: 'absolute',
              top: `${startIndex * rowHeight}px`
            }}
          >
            <tbody>{renderRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

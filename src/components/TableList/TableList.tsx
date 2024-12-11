import { Column, Ticket } from '../../types'
import styles from './tableList.module.css'

interface TableProps {
  columns: readonly Column[]
  rows: Ticket[]
}
export default function TableList({ columns, rows }: TableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableList}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={`${row.id}-${column.id}`}>{row[column.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

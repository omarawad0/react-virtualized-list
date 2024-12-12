import { Column } from '../../types'
import styles from './tableList.module.css'

export default function ColumnHeader({ columns }: { columns: readonly Column[] }) {
  return (
    <table className={styles.tableList}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>
    </table>
  )
}

import { Column } from '../../types'

export default function ColumnHeader({ columns }: { columns: readonly Column[] }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id}>{column.label}</th>
        ))}
      </tr>
    </thead>
  )
}

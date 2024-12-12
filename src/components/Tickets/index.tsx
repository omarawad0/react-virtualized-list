import { Column } from '../../types'
import { getTickets } from '../../utils/getTickets'
import TableList from '../TableList/TableList'

const columns: readonly Column[] = [
  { id: 'id', label: 'Id' },
  { id: 'subject', label: 'Subject' },
  {
    id: 'priority',
    label: 'Priority'
  },
  {
    id: 'status',
    label: 'Status'
  },
  {
    id: 'description',
    label: 'Description'
  }
]
export default function Tickets() {
  return (
    <div>
      <TableList columns={columns} rows={getTickets(10000)} rowHeight={50} maxHeight={500} />
    </div>
  )
}

import { Column, Priority, Status, Ticket } from '../../../types'

export const columns: readonly Column[] = [
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

export const rows: Ticket[] = [
  {
    id: 1,
    subject: 'Ticket 1',
    priority: Priority.High,
    status: Status.Open,
    description: 'This is the description for ticket 1.'
  },
  {
    id: 2,
    subject: 'Ticket 2',
    priority: Priority.Medium,
    status: Status.InProgress,
    description: 'This is the description for ticket 2.'
  },
  {
    id: 3,
    subject: 'Ticket 3',
    priority: Priority.Low,
    status: Status.Closed,
    description: 'This is the description for ticket 3.'
  },
  {
    id: 4,
    subject: 'Ticket 4',
    priority: Priority.High,
    status: Status.Open,
    description: 'This is the description for ticket 4.'
  },
  {
    id: 5,
    subject: 'Ticket 5',
    priority: Priority.Medium,
    status: Status.InProgress,
    description: 'This is the description for ticket 5.'
  },
  {
    id: 6,
    subject: 'Ticket 6',
    priority: Priority.Low,
    status: Status.Closed,
    description: 'This is the description for ticket 6.'
  },
  {
    id: 7,
    subject: 'Ticket 7',
    priority: Priority.High,
    status: Status.Open,
    description: 'This is the description for ticket 7.'
  },
  {
    id: 8,
    subject: 'Ticket 8',
    priority: Priority.Medium,
    status: Status.InProgress,
    description: 'This is the description for ticket 8.'
  },
  {
    id: 9,
    subject: 'Ticket 9',
    priority: Priority.Low,
    status: Status.Closed,
    description: 'This is the description for ticket 9.'
  },
  {
    id: 10,
    subject: 'Ticket 10',
    priority: Priority.High,
    status: Status.Open,
    description: 'This is the description for ticket 10.'
  },
  {
    id: 11,
    subject: 'Ticket 11',
    priority: Priority.Medium,
    status: Status.InProgress,
    description: 'This is the description for ticket 11.'
  },
  {
    id: 12,
    subject: 'Ticket 12',
    priority: Priority.Low,
    status: Status.Closed,
    description: 'This is the description for ticket 12.'
  },
  {
    id: 13,
    subject: 'Ticket 13',
    priority: Priority.High,
    status: Status.Open,
    description: 'This is the description for ticket 13.'
  },
  {
    id: 14,
    subject: 'Ticket 14',
    priority: Priority.Medium,
    status: Status.InProgress,
    description: 'This is the description for ticket 14.'
  },
  {
    id: 15,
    subject: 'Ticket 15',
    priority: Priority.Low,
    status: Status.Closed,
    description: 'This is the description for ticket 15.'
  }
]

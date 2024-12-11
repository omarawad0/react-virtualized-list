import { Priority, Status, Ticket } from '../types'

export const getTickets = (): Ticket[] => {
  const randomIndex = (max: number) => Math.floor(Math.random() * max)
  return Array.from({ length: 10000 }, (_, id) => ({
    id: id + 1,
    subject: `Ticket ${id + 1}`,
    priority: [Priority.High, Priority.Medium, Priority.Low][randomIndex(3)],
    status: [Status.Open, Status.InProgress, Status.Closed][randomIndex(3)],
    description: `This is the description for ticket ${id + 1}.`
  }))
}

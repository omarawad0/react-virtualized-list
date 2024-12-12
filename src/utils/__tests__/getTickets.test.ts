import { getTickets } from '../getTickets'

describe('getTickets', () => {
  const numberOfTickets = 10
  it('should return an array of tickets that has a length of numberOfTickets', () => {
    const tickets = getTickets(numberOfTickets)
    expect(tickets.length).toBe(numberOfTickets)
  })
})

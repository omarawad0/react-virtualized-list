import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('ColumnHeader', () => {
  it('should render the column headers', () => {
    render(
      <Header
        columns={[
          { id: 'id', label: 'Id' },
          { id: 'subject', label: 'Subject' },
          {
            id: 'priority',
            label: 'Priority'
          }
        ]}
      />
    )
    const priorityHeader = screen.getByText('Priority')
    expect(priorityHeader).toBeInTheDocument()
  })
})

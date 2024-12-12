import { render, screen } from '@testing-library/react'
import TableList from '../TableList'
import { columns, rows } from './mocks'

describe('TableList', () => {
  const maxHeight = 500
  const rowHeight = 50

  it('Should render the rows correctly', () => {
    render(
      <TableList
        columns={columns}
        rows={rows}
        rowHeight={rowHeight}
        maxHeight={maxHeight}
        extraRowLength={0}
      />
    )
    const visibleRowCount = Math.ceil(maxHeight / rowHeight) // 10
    const rowsElement = screen.getAllByRole('row') // 11 - because it includes the header row;
    const headerRowCount = 1
    expect(rowsElement).toHaveLength(visibleRowCount + headerRowCount)

    // check the content of last row
    expect(rowsElement[visibleRowCount]).toHaveTextContent(
      rows[visibleRowCount - headerRowCount].subject
    )
    // Make sure that there is nothing after the last row and not all the rows passed are rendered
    expect(rowsElement[visibleRowCount + 1]).toBeUndefined()
  })
})

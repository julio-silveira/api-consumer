import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

interface Props {
  tableHeaders: string[]
}

const CustomTableHeader: React.FC<Props> = ({ tableHeaders }) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((head: string) => (
          <TableCell
            sx={{
              textAlign: 'center',
              fontSize: '1rem',
              fontWeight: 700
            }}
            key={head}
          >
            {head}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default CustomTableHeader

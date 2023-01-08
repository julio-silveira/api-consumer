import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import React from 'react'
import { CostumersButtons } from '../CostumersButtons'

interface PropsInterface {
  loading: boolean
  data: []
}

const tableHeaders = ['Nome', 'Email', 'Telefone', 'CPF', 'Endereço', 'Ações']

const CostumersTable: React.FC<PropsInterface> = ({ loading, data }) => {
  const loadingPlaceholder = () => {
    const columns = []

    for (let i = 0; i < 10; i += 1) {
      const row = (
        <TableRow
          key={i}
          hover
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {tableHeaders.map((_el, index) => (
            <TableCell key={`${i} ${index}`}>
              <CircularProgress color="secondary" />
            </TableCell>
          ))}
        </TableRow>
      )
      columns.push(row)
    }
    return columns
  }

  return (
    <TableContainer
      sx={{
        my: 15,
        width: '90%',
        bgcolor: '#EFEFEF'
      }}
      elevation={7}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((head) => (
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
        <TableBody>
          {loading
            ? loadingPlaceholder()
            : data.map(
                ({ name, email, phone, cpf, _id, address: { city } }) => (
                  <TableRow hover key={`${name} ${_id}`}>
                    <TableCell sx={{ textAlign: 'center' }}>{name}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{email}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{phone}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{cpf}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{city}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <CostumersButtons _id={_id} />
                    </TableCell>
                  </TableRow>
                )
              )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CostumersTable

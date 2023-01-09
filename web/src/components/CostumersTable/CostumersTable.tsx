import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material'
import React from 'react'
import { toCPF, toPhoneNumber } from '../../helpers/handleData'
import { CostumersButtons } from '../CostumersButtons'
import { CustomTableHeader } from '../CustomTableHeader'

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
        width: '95%',
        bgcolor: '#EFEFEF'
      }}
      elevation={4}
      component={Paper}
    >
      <Table>
        <CustomTableHeader tableHeaders={tableHeaders} />
        <TableBody>
          {loading
            ? loadingPlaceholder()
            : data.map(
                ({ name, email, phone, cpf, _id, address: { city } }) => (
                  <TableRow hover key={`${name} ${_id}`}>
                    <TableCell sx={{ textAlign: 'center' }}>{name}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{email}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {toPhoneNumber(phone)}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {toCPF(cpf)}
                    </TableCell>
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

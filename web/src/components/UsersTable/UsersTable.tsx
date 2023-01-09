import {
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { randomUserInterface } from '../../@types/RandomUsersTypes'
import { CustomTableHeader } from '../CustomTableHeader'

interface PropsInterface {
  loading: boolean
  data: randomUserInterface[]
  page: number
  nextPage: () => void
  previousPage: () => void
  pageSize: number
}

const tableHeaders = ['Foto', 'Nome', 'Email', 'Nome de Usuário', 'Idade']

const UsersTable: React.FC<PropsInterface> = ({
  loading,
  data,
  page,
  nextPage,
  previousPage,
  pageSize
}) => {
  const loadingPlaceholder = () => {
    const columns = []

    for (let i = 0; i < pageSize; i += 1) {
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
        mb: 3,
        width: '90%',
        bgcolor: '#EFEFEF'
      }}
      elevation={7}
      component={Paper}
    >
      <Table>
        <CustomTableHeader tableHeaders={tableHeaders} />
        <TableBody>
          {loading
            ? loadingPlaceholder()
            : data.map(
                ({
                  picture: { thumbnail },
                  name: { first, last },
                  email,
                  login: { username },
                  dob: { age }
                }) => (
                  <TableRow hover key={`${first} ${last} ${age}`}>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <img
                        style={{
                          borderRadius: '50%'
                        }}
                        width="75px"
                        src={thumbnail}
                        alt={`${first}thumbnail`}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: 'center' }}
                    >{`${first} ${last}`}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{email}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {username}
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: 'center' }}
                    >{`${age} anos`}</TableCell>
                  </TableRow>
                )
              )}
        </TableBody>
      </Table>
      <Stack sx={{ justifyContent: 'center' }} direction="row">
        <IconButton size="large" onClick={previousPage}>
          <NavigateBeforeIcon fontSize="large" />
        </IconButton>
        <IconButton size="large">
          <Typography fontSize="large">{page}</Typography>
        </IconButton>
        <IconButton size="large" onClick={nextPage}>
          <NavigateNextIcon fontSize="large" />
        </IconButton>
      </Stack>
    </TableContainer>
  )
}

export default UsersTable

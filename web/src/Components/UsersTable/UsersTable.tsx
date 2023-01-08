import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

interface dataInterface {
  info: object
  results: []
}

interface PropsInterface {
  data: dataInterface | undefined
  page: number
  nextPage: () => void
  previousPage: () => void
}

const tableHeaders = ['Foto', 'Nome', 'email', 'username', 'idade']

const UsersTable: React.FC<PropsInterface> = ({
  data,
  page,
  nextPage,
  previousPage
}) => {
  return (
    <TableContainer
      sx={{ my: 10, width: '90%', bgcolor: '#EFEFEF' }}
      elevation={5}
      component={Paper}
    >
      <Table sx={{ minWidth: 250, bgcolor: '#EFEFEF' }}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((head) => (
              <TableCell key={head}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.results.map(
            ({
              picture: { thumbnail },
              name: { first, last },
              email,
              login: { username },
              dob: { age }
            }) => (
              <TableRow
                hover
                key={`${first} ${last} ${age}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <img
                    style={{ borderRadius: '50%' }}
                    width="50px"
                    src={thumbnail}
                    alt={`${first}thumbnail`}
                  />
                </TableCell>
                <TableCell>{`${first} ${last}`}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{age}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Stack sx={{ justifyContent: 'center' }} direction="row">
        <IconButton onClick={previousPage}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton>{page}</IconButton>
        <IconButton onClick={nextPage}>
          <NavigateNextIcon />
        </IconButton>
      </Stack>
    </TableContainer>
  )
}

export default UsersTable

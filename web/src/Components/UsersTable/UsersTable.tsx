import {
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

interface PropsInterface {
  loading: boolean
  data: []
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
        my: 5,
        mb: { xs: '30vh', md: '5vh' },
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
                  fontSize: '1.2rem',
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
                        style={{ borderRadius: '50%' }}
                        width="50px"
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
                    <TableCell sx={{ textAlign: 'center' }}>{age}</TableCell>
                  </TableRow>
                )
              )}
        </TableBody>
      </Table>
      <Stack sx={{ justifyContent: 'center' }} direction="row">
        <IconButton onClick={previousPage}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton>
          <Typography>{page}</Typography>
        </IconButton>
        <IconButton onClick={nextPage}>
          <NavigateNextIcon />
        </IconButton>
      </Stack>
    </TableContainer>
  )
}

export default UsersTable

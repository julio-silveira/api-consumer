import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import AppContext, { ContextType } from '../../context/AppContext'

const CostumerDetails: React.FC = () => {
  const { costumerDetails } = useContext(AppContext) as ContextType
  const {
    name,
    cpf,
    email,
    phone,
    postalCode,
    state,
    city,
    street,
    number,
    complement
  } = costumerDetails
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      component="article"
    >
      <Typography pb={3} variant="h4">{`Informações do usuário`}</Typography>
      <Box>
        <Typography variant="h6">{`Nome: ${name}`}</Typography>
        <Typography variant="h6">{`CPF: ${cpf}`}</Typography>
        <Typography variant="h6">{`Email: ${email}`}</Typography>
        <Typography variant="h6">{`Telefone: ${phone}`}</Typography>
        <Typography variant="h6">{`Rua: ${street} ${
          complement === undefined ? '' : complement
        } Nº: ${number}`}</Typography>
        <Typography variant="h6">{`Cidade: ${city}/${state}`}</Typography>
        <Typography variant="h6">{`CEP:${postalCode}`}</Typography>
      </Box>
    </Box>
  )
}

export default CostumerDetails

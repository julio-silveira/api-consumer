import { Box, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import AppContext, { ContextType } from '../../context/AppContext'
import { toCEP, toCPF, toPhoneNumber } from '../../helpers/handleData'

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
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Typography variant="h6">{`Nome: ${name}`}</Typography>
        <Typography variant="h6">{`CPF: ${toCPF(cpf)}`}</Typography>
        <Typography variant="h6">{`Email: ${email}`}</Typography>
        <Typography variant="h6">{`Telefone: ${toPhoneNumber(
          phone
        )}`}</Typography>
        <Typography variant="body1">{`Rua: ${street} ${
          complement === undefined ? '' : complement
        } Nº: ${number}`}</Typography>
        <Typography variant="body1">{`Cidade: ${city}/${state}`}</Typography>
        <Typography variant="body1">{`CEP:${toCEP(postalCode)}`}</Typography>
      </Stack>
    </Box>
  )
}

export default CostumerDetails

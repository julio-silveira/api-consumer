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
        alignItems: 'center',
        textAlign: 'center'
      }}
      component="article"
    >
      <Typography pb={3} variant="h4">
        Informações
      </Typography>
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Nome
          </Typography>
          <Typography variant="h6">{name}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            CPF
          </Typography>
          <Typography variant="h6">{toCPF(cpf)}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Email
          </Typography>
          <Typography variant="h6">{email}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Telefone
          </Typography>
          <Typography variant="h6">{toPhoneNumber(phone)}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Rua
          </Typography>
          <Typography variant="h6">{`${street}
          ${complement === undefined ? '' : complement} ${number}`}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Cidade/Estado
          </Typography>
          <Typography variant="h6">{`${city}/${state}`}</Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            CEP
          </Typography>
          <Typography variant="h6">{toCEP(postalCode)}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default CostumerDetails

import { Button, Stack, TextField, Typography } from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system'
import React, { useContext, useState } from 'react'
import { CostumerFormInterface } from '../../@types/FormTypes'
import AppContext, { ContextType } from '../../context/AppContext'

const subStacksSpacing = { xs: 0.5, md: 1 }
const subStacksDirections = { xs: 'column', md: 'row' } as ResponsiveStyleValue<
  'column' | 'row' | 'row-reverse' | 'column-reverse'
>
const CostumerForm: React.FC = () => {
  const {
    formData,
    onInputChange,
    handleCreateCostumer,
    handleEditCostumer,
    modalType
  } = useContext(AppContext) as ContextType

  const [textFields, setTextFields] = useState(false)
  const [eleventTextFields, setElevenTextFields] = useState(false)
  const [eightTextFields, setEightTextFields] = useState(false)

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
  } = formData as CostumerFormInterface

  const isTextFieldsFilled = () => {
    const requiredTextFields = [name, email, city, street]
    return (
      requiredTextFields.every((field) => field.length >= 3) &&
      number.length >= 1 &&
      state.length >= 2
    )
  }
  const isElevenDigtsFieldFilled = () => {
    const elevenDigitsFields = [cpf, phone]
    return elevenDigitsFields.every((field) => field.length === 11)
  }

  const isEightDigitsFilled = () => {
    const elevenDigitsFields = [postalCode]
    return elevenDigitsFields.every((field) => field.length === 8)
  }

  const verifiedSubmit = () => {
    if (
      isTextFieldsFilled() &&
      isElevenDigtsFieldFilled() &&
      isEightDigitsFilled()
    ) {
      modalType === 'create' ? handleCreateCostumer() : handleEditCostumer()
    }

    setTextFields(!isTextFieldsFilled())
    setElevenTextFields(!isElevenDigtsFieldFilled())
    setEightTextFields(!isEightDigitsFilled())
  }

  return (
    <Stack sx={{ textAlign: 'center' }} spacing={0.5} component="form">
      <Typography sx={{ fontWeight: 700 }} variant="h6" color="secondary">
        {modalType === 'create' ? 'Cadastrar Cliente' : 'Editar Cliente'}
      </Typography>

      <Stack spacing={subStacksSpacing} direction={subStacksDirections}>
        <TextField
          sx={{ flexBasis: '70%' }}
          required
          color="secondary"
          label="Nome"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '30%' }}
          required
          color="secondary"
          label="CPF"
          name="cpf"
          value={cpf}
          onChange={onInputChange}
        />
      </Stack>
      <Stack spacing={subStacksSpacing} direction={subStacksDirections}>
        <TextField
          sx={{ flexBasis: '60%' }}
          required
          color="secondary"
          label="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '40%' }}
          required
          color="secondary"
          label="Telefone"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
      </Stack>
      <Stack spacing={subStacksSpacing} direction={subStacksDirections}>
        <TextField
          sx={{ flexBasis: '15%' }}
          required
          color="secondary"
          label="CEP"
          name="postalCode"
          value={postalCode}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '10%' }}
          required
          color="secondary"
          label="Estado"
          name="state"
          value={state}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '15%' }}
          required
          color="secondary"
          label="Cidade"
          name="city"
          value={city}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '35%' }}
          required
          color="secondary"
          label="Rua/Bairro"
          name="street"
          value={street}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '8%' }}
          required
          color="secondary"
          label="Nº"
          name="number"
          value={number}
          onChange={onInputChange}
        />
        <TextField
          sx={{ flexBasis: '28%' }}
          color="secondary"
          label="Complemento"
          name="complement"
          value={complement}
          onChange={onInputChange}
        />
      </Stack>
      <Button onClick={verifiedSubmit} color="secondary" variant="contained">
        {modalType === 'create' ? 'Cadastrar' : 'Editar'}
      </Button>
      {textFields ? (
        <Typography color="error">
          Os campos com marcados com (*) são obrigatórios!
        </Typography>
      ) : null}
      {eleventTextFields ? (
        <Typography color="error">
          Os campos de Telefone e CPF precisam ter 11 dígitos numéricos!
        </Typography>
      ) : null}
      {eightTextFields ? (
        <Typography color="error">
          O campo de CEP precisa ter 8 dígitos numéricos!
        </Typography>
      ) : null}
    </Stack>
  )
}

export default CostumerForm

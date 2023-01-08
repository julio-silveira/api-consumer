import { SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import FormType from '../@types/FormTypes'

const useForm = (formState: FormType) => {
  const [formData, setFormData] = useState(formState)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log(name, value)

    setFormData({ ...formData, [name]: value })
  }

  const onSelectChange = (
    event: SelectChangeEvent<'name' | 'email' | 'username'>
  ) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  return { formData, setFormData, onInputChange, onSelectChange }
}

export default useForm

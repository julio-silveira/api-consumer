import React, { useState } from 'react'
import FormType from '../@types/FormTypes'

const useForm = (formState: FormType) => {
  const [formData, setFormData] = useState(formState)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  return { formData, onInputChange }
}

export default useForm

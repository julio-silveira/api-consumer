import { CostumerFormInterface } from '../@types/FormTypes'
import { getToken } from './localStorageHelper'

const baseUrl = `http://localhost:3000`

export const buildCostumerData = (formData: CostumerFormInterface) => ({
  name: formData.name,
  cpf: formData.cpf,
  email: formData.email,
  phone: formData.phone,
  address: {
    street: formData.street,
    city: formData.city,
    number: formData.number,
    postalCode: formData.postalCode,
    complement: formData.complement,
    state: formData.state
  }
})

export const buildPostRequest = (FormData: CostumerFormInterface) => {
  return {
    method: 'POST',
    url: `${baseUrl}/costumers`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    data: buildCostumerData(FormData)
  }
}

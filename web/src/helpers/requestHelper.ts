import { CostumerFormInterface } from '../@types/FormTypes'
import { CostumerResponseInterface } from '../@types/ResponseTypes'
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

export const buildFormData = (
  requestCostumerDate: CostumerResponseInterface
) => ({
  name: requestCostumerDate.name,
  cpf: requestCostumerDate.cpf,
  email: requestCostumerDate.email,
  phone: requestCostumerDate.phone,
  street: requestCostumerDate.address.street,
  city: requestCostumerDate.address.city,
  number: requestCostumerDate.address.number,
  postalCode: requestCostumerDate.address.postalCode,
  complement: requestCostumerDate.address.complement,
  state: requestCostumerDate.address.state
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

export const buildGetAllRequest = () => {
  return {
    method: 'GET',
    url: `${baseUrl}/costumers`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  }
}

export const buildDeleteRequest = (_id: string) => {
  return {
    method: 'DELETE',
    url: `${baseUrl}/costumers/${_id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  }
}

export const buildGetOneRequest = (_id: string) => {
  return {
    method: 'GET',
    url: `${baseUrl}/costumers/${_id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  }
}

export const buildUpdateRequest = (
  _id: string,
  FormData: CostumerFormInterface
) => {
  return {
    method: 'PATCH',
    url: `${baseUrl}/costumers/${_id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    data: buildCostumerData(FormData)
  }
}

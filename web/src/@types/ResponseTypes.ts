export interface CostumerResponseInterface {
  name: string
  cpf: string
  email: string
  phone: string
  address: AddressInterface
  _id: string
}

interface AddressInterface {
  street: string
  city: string
  number: string
  postalCode: string
  complement: string
  state: string
}

export interface LoginResponseInterface {
  access_token: string
}

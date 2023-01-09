export interface CostumerResponseInterface {
  name: string
  cpf: string
  email: string
  phone: string
  address: AddressInterface
}

interface AddressInterface {
  street: string
  city: string
  number: string
  postalCode: string
  complement: string
  state: string
}

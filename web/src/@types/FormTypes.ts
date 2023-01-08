export interface LoginFormInterface {
  username: string
  password: string
}

export type Filters = '' | 'name' | 'email' | 'username'

export interface statusCodeInterface {
  statusCode: number
}

export interface FilterFormInterface {
  text: string
  filter: Filters
}

export interface CostumerFormInterface {
  name: string
  cpf: string
  email: string
  phone: string
  postalCode: string
  state: string
  city: string
  street: string
  number: string
  complement: string
}

type FormType =
  | LoginFormInterface
  | FilterFormInterface
  | statusCodeInterface
  | CostumerFormInterface

export default FormType

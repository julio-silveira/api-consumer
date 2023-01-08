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

type FormType = LoginFormInterface | FilterFormInterface | statusCodeInterface

export default FormType

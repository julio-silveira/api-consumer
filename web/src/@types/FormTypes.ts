export interface LoginFormInterface {
  username: string
  password: string
}

export type Filters = '' | 'user' | 'email' | 'username'

export interface FilterFormInterface {
  text: string
  filter: Filters
}

type FormType = LoginFormInterface | FilterFormInterface

export default FormType

import { FilterFormInterface } from '../@types/FormTypes'
import { randomUserInterface } from '../@types/RandomUsersTypes'

const checkStringIncludes = (toSearch: string, target: string) => {
  return toSearch.toLowerCase().includes(target.toLowerCase())
}

const checkName = (firstName: string, lastName: string, text: string) =>
  checkStringIncludes(firstName, text) || checkStringIncludes(lastName, text)

export const filterResponse = (
  formData: FilterFormInterface,
  response: randomUserInterface[]
) => {
  const { text } = formData
  return response.filter((data) => {
    const {
      name: { first, last },
      login: { username },
      email
    } = data
    return (
      checkName(first, last, text) ||
      checkStringIncludes(username, text) ||
      checkStringIncludes(email, text)
    )
  })
}

import { FilterFormInterface } from '../@types/FormTypes'

const checkStringIncludes = (toSearch: string, target: string) => {
  return toSearch.toLowerCase().includes(target.toLowerCase())
}

export const filterResponse = (
  formData: FilterFormInterface,
  response: []
): [] => {
  const { text } = formData
  switch (formData.filter) {
    case 'name':
      return response.filter(
        ({ name: { first, last } }) =>
          checkStringIncludes(first, text) || checkStringIncludes(last, text)
      ) as []
    case 'email':
      return response.filter(({ email }) =>
        checkStringIncludes(email, text)
      ) as []
    case 'username':
      return response.filter(({ login: { username } }) =>
        checkStringIncludes(username, text)
      ) as []
    default:
      return response as []
  }
}

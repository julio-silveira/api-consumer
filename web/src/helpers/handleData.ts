export const toPhoneNumber = (phone: string) => {
  return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(
    7,
    11
  )}`
}

export const toCPF = (cpf: string) => {
  return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
    6,
    9
  )}-${cpf.substring(9, 12)}`
}

export const toCEP = (cep: string) => {
  return `${cep.substring(0, 5)}-${cep.substring(5, 8)}`
}

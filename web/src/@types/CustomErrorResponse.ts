export interface CustomErrorResponseInterface {
  response: {
    data: CustomErrorResponseDataInterface
  }
}

export interface CustomErrorResponseDataInterface {
  message: string
  statusCode: number
}

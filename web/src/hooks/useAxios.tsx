import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import {
  CustomErrorResponseDataInterface,
  CustomErrorResponseInterface
} from '../@types/CustomErrorResponse'

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState<CustomErrorResponseDataInterface>()
  const [loading, setLoading] = useState(true)

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params)
      setResponse(result.data)
      return result
    } catch (err) {
      if (err !== undefined) {
        const handleError = err as CustomErrorResponseInterface
        setError(handleError.response.data)
      } else setError(err)
    } finally {
      setLoading(false)
    }
  }

  const retryRequest = () => {
    setLoading(true)
    fetchData(axiosParams)
  }

  const newAxiosRequest = async (customParams: AxiosRequestConfig) => {
    setLoading(true)
    const data = await fetchData(customParams)
    return data
  }

  useEffect(() => {
    const { url, method } = axiosParams
    if (method?.toLocaleLowerCase().includes('get') && url !== undefined)
      fetchData(axiosParams)
  }, [])
  return { response, error, loading, retryRequest, newAxiosRequest }
}

export default useAxios

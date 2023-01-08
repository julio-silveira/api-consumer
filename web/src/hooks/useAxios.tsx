import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(true)

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params)
      setResponse(result.data)
      return result
    } catch (err) {
      setError(err as AxiosError)
    } finally {
      setLoading(false)
    }
  }

  const retryRequest = () => {
    fetchData(axiosParams)
  }

  const newAxiosRequest = async (customParams: AxiosRequestConfig) => {
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

import axios from 'axios'
import { getToken } from './generalUtility'
import K from './constants'
import { message } from 'antd'

axios.defaults.baseURL = K.network.baseApiURL
axios.defaults.timeout = K.network.timeout
axios.defaults.headers.common = { Authorization: getToken() }
axios.defaults.headers.common['Content-Type'] = K.network.contentType

export const apiCall = async (path, method, body = {}) => {
  try {
    let response = method === 'get' ? await axios[method](path) : await axios[method](path, body)
    if (response?.success) {
      return response?.response
    } else {
      message.error(response?.response)
      return false
    }
  } catch (error) {
    console.log('Error : ', error?.message || error)
    message.error(`Error : ${error?.message || error}`)
    return false
  }
}

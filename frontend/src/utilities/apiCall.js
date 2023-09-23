import axios from 'axios'
import { getToken } from './generalUtility'
import K from './constants'

axios.defaults.baseURL = K.network.baseApiURL
axios.defaults.timeout = K.network.timeout
axios.defaults.headers.common = { Authorization: getToken() }
axios.defaults.headers.common['Content-Type'] = K.network.contentType

export const apiCall = async (path = '', method = 'post', body = {}) => {
  try {
    let response = method === 'get' ? await axios[method](path) : await axios[method](path, body)

    console.log('==>', response)
  } catch (error) {
    console.error('Error : ', error)
  }
}

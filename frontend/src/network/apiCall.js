import axios from 'axios'
import { getToken } from '../utilities/generalUtility'
import { K } from '../utilities/constants'

axios.defaults.baseURL = K.network.baseApiURL
axios.defaults.timeout = K.network.timeout
axios.defaults.headers.common = { Authorization: getToken() }
axios.defaults.headers.common['Content-Type'] = K.network.contentType

export const login = async () => {
  try {
    let res = await axios.get('/user')
    console.log('==>', res)
  } catch (error) {
    console.log('==>error', error)
  }
}

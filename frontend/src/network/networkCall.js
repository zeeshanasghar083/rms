import axios from 'axios'
import K from 'utilities/constants'
import { message } from 'antd'
import { trackPromise } from 'react-promise-tracker'

export default class NetworkCall {
  static async fetch(request, useLoading = true) {
    try {
      const response = useLoading
        ? await trackPromise(
            NetworkCall.axios({
              method: request.method,
              url: request.url,
              data: request.body,
              headers: request.headers,
              validateStatus: (status) => {
                return (status >= 200 && status < 300) || status === 304
              },
            }),
          )
        : await NetworkCall.axios({
            method: request.method,
            url: request.url,
            data: request.body,
            headers: request.headers,
            validateStatus: (status) => {
              return (status >= 200 && status < 300) || status === 304
            },
          })

      return response.data
    } catch (err) {
      let error = err.response
      if (error === undefined) {
        message.error('Cannot connect to server')
        return Promise.reject({
          error: error,
        })
      } else if (error.status === K.Network.StatusCode.Unauthorized) {
        // User.logoutCall('User unauthorized')
      } else message.error(error.data.message)

      return Promise.reject({
        error: error,
        message: error.data.message,
        statusCode: error.status,
      })
    }
  }
}
NetworkCall.axios = axios.create({
  baseURL: K.Network.URL.BaseAPI,
  timeout: K.Network.Timeout,
  headers: {},
})

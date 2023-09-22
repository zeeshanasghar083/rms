import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import test from './test.slice'

export default configureStore({
  reducer: {
    test,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

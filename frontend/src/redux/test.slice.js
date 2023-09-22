import { createSlice } from '@reduxjs/toolkit'

export const extraDataSlice = createSlice({
  name: 'test',
  initialState: {
    test: 'test',
  },
  reducers: {},
})

export const {} = extraDataSlice.actions

export default extraDataSlice.reducer

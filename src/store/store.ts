import { configureStore } from '@reduxjs/toolkit'
import { fileSlice } from './fileSlice'
import { dataSlice } from './dataSlice'


export const store = configureStore({
  reducer: {
    files: fileSlice.reducer,
    data: dataSlice.reducer,
    
  },
})
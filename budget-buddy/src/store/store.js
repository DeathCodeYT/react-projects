import { configureStore } from "@reduxjs/toolkit"
import transictionReducer from '../features/transectionSlice'

export const store = configureStore({
    reducer:transictionReducer
})

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import adminReducer from '../features/admin/adminSlice'


// import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin:adminReducer,

    // goals: goalReducer,
  },
})
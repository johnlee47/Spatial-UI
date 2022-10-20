import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import adminService from './adminService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  usersData:null,
  usersDataTwo:null,


  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const getUsers = createAsyncThunk(
  'admin/getUser',
  async ( thunkAPI) => {
    try {
      return await adminService.getUsers()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const editUsers = createAsyncThunk(
  'admin/editUsers',

  async ({currentUser,usersDataTwo}, thunkAPI) => {
    try {
      return await adminService.editUsers({currentUser,usersDataTwo})
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)



// Register user

export const deleteUsers = createAsyncThunk(
  'admin/deleteUsers',

  async ({user_id}, thunkAPI) => {
    
    try {
      return await adminService.deleteUsers({user_id})
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const logout = createAsyncThunk('auth/logout', async () => {
  await adminService.logout()
})

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.usersData = action.payload

      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    
        // state.user = null
      })


      .addCase(editUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.usersDataTwo = action.payload
      })
      .addCase(editUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.usersDataTwo = null
      })


      .addCase(deleteUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.usersDataTwo = action.payload
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      
   
  },
})

export const { reset } = adminSlice.actions
export default adminSlice.reducer
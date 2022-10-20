
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { useParams } from "react-router";

const API_URL = 'https://intell-product.herokuapp.com/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'user/signup', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'user/signin', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}



const resetsub = async ({userId,token,password})=> {


// console.log(userId,token,password)

 
    const response= await  axios.post(`https://intell-product.herokuapp.com/user/reset/${userId}/${token}`,{password})
  
    return response.data
 
};


const forget = async (userData) => {
  const response = await axios.post(API_URL + 'user/forget', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

  return response.data
}



// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  resetsub,
  forget
}

export default authService
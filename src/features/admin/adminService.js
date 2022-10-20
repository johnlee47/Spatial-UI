
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { useParams } from "react-router";

const API_URL = 'https://intell-product.herokuapp.com/'
// const API_URL = 'http://localhost:5000/'






// Login user
const getUsers = async () => {
  const response = await axios.get(API_URL + 'admin/users',{
    headers: {
      'Authorization': `token ${JSON.parse(localStorage.getItem('user')).token}`
    }
  })

  return response.data
}



const editUsers = async ({currentUser,usersDataTwo})=> {


// console.log(currentUser,usersDataTwo)

 
    // const response= await  axios.post(`https://intell-product.herokuapp.com/user/reset/${userId}/${token}`,{password})
    const response= await  axios.patch(`https://intell-product.herokuapp.com/admin/users/${currentUser}`,usersDataTwo,{
    headers: {
      'Authorization': `token ${JSON.parse(localStorage.getItem('user')).token}`
    }
  })
  
    return response.data
 
};


const deleteUsers = async ({user_id}) => {
  const response= await  axios.delete(`https://intell-product.herokuapp.com/admin/users/${user_id}`,{
    headers: {
      'Authorization': `token ${JSON.parse(localStorage.getItem('user')).token}`
    }
  }
  )

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

  return response.data
}



// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const adminService = {
            getUsers,
            editUsers,
          deleteUsers

}

export default adminService
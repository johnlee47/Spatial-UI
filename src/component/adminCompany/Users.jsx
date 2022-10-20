import React,{ useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getUsers,editUsers,reset,deleteUsers } from "../../features/admin/adminSlice";

import Spinner from '../../component/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
const Users =()=> {
  const dispatch = useDispatch()
  const init = {name: '', email: '', role:'', verified: false,controlled:false };
  const [userauth, setUserauth] = useState(JSON.parse(localStorage.getItem('user')));

 
   

  const [formData, setFormData] = useState(init);

  const { name, email,role,verified,controlled } = formData

  const [open, setOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const {usersData, usersDataTwo,isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  )


  const handleEdit = (e, user) => { 
    // console.log(user);
    setCurrentUser(user._id);
    // console.log("cu", currentUser);
    setFormData({name: user.name, email: user.email, role:user.role, verified: user.verified ,controlled:user.controlled})
    setOpen(true);

   
  }


  
    const handleDelete = (e, user_id)=> {
        dispatch(deleteUsers({user_id}));
        if (isSuccess) {
          toast("Delete Successful")
        }
    }
  const onSubmit = (e) => {
    e.preventDefault()

    const usersDataTwo = {
        name,
        email,
        role,
        verified,
        controlled

    }

    dispatch(editUsers({currentUser,usersDataTwo}))
  
    setOpen(false);
    if (isSuccess) {
      toast("Update Successful")
    }

  }

  
 
  // console.log(usersData)


  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
  
   

   
    dispatch(getUsers())
    dispatch(reset())
  }, [ usersDataTwo,deleteUsers,editUsers])




  const TableDataComponent = ({ item }) => {
    return (
      
      <tr className="bg-white border-b">
      {/* {
                     <td key={item._id}>{key}</td>
                
       }    */}
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {item?.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
          {item?.email}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
         {item?.role}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">


      {item?.verified?.toString()}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">


        {item?.controlled?.toString()}
        </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <button className="focus:outline-none text-white bg-red-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-6 py-2 " onClick={(e) =>handleDelete(e, item._id)} >delete</button> <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-6 py-2 " id= "editee" onClick={(e) =>handleEdit(e, item)} color="primary" >edit</button>
      </td>
  </tr>

    )
 }

    return (
      <div >
        {/* <h1 className='flex justify-center'>Users</h1> */}

        <div className="flex items-center justify-center py-4 text-black flex-col peer-last: bg-white mx-2  mt-4 lg:ml-14  lg:w-11/12">
         <p className="font-bold text-3xl font-mono  text-black whitespace-nowrap">  Users </p>
        </div>
       
        <div className="items-center justify-center">
                 <div className="flex flex-col bg-white mx-2  mt-4 lg:ml-14  lg:w-11/12">
                    <div className="overflow-x-auto sm:-mx-6 ">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                      <thead className="border-b">
                                          <tr>
                                        
                                          <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                                              User Name
                                          </th>
                                          <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                                              Email
                                          </th>
                                          <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                                              Role
                                          </th>
                                          <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                                            verified
                                          </th>
                                          <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                                          privilege
                                          </th>
                                          <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                                      
                                          </th>
                                          </tr>
                                      </thead>
                            { !usersData ? <tbody><tr className="bg-white border-b w-screen text black text-sm"> 
                                <th className="text-sm text-gray-900 font-light w-screen ">If it takes long time try to logout and login again</th></tr></tbody>: 
                             <tbody>
                          
                                        {usersData.map((item, key) => {

                                          return <TableDataComponent key={item._id} item={item} />
                                                                          
                                            }

                                                            )}
                 
                            </tbody>  }
                            
       
                          
                         
                            </table>
                            
                {open ? (
                
                <>
                <p>Edit { (currentUser) && currentUser.name }</p>
              <div className="flex   overflow-auto backdrop-blur-sm bg-white/30  justify-center fixed inset-0 z-1 focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              <div className="flex items-end justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                              
                                <button
                                  className="bg-transparent border-0 text-black float-right"
                                  onClick={() => setOpen(false)}
                                >
                                  <div className="text-black opacity-7 text-xl block  rounded-full">
                                    x
                                  </div>
                                </button>
                              </div>
                            <div className="mt-2 mb-8 mx-12 w-80">
                              <form onSubmit={onSubmit}>

                                    <div className="w-full">
                                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                      <input  
                                         onChange={(e) =>setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   value={formData.email || ""} required/>
                                    </div>


                                    <div className="py-2">
                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Name</label>
                                      <input  onChange={(e) =>setFormData({ ...formData, name: e.target.value })} name="name" type="text" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"value={formData.name || ""} required/>
                                    </div>

                                    <div className="py-2">
                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verified Email</label>
                                      <select onChange={(e) =>setFormData({ ...formData, verified: e.target.value })} name="verified" id="verified"  value={formData.verified || false} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                              <option value={false}>Not-Verified</option>
                                              <option value={true}>Verified</option>
                                     </select>
                                    </div>

                                    <div className="py-2">
                                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Role</label>
                                      <select  onChange={(e) =>setFormData({ ...formData, role: e.target.value })} id="role"  name="role"  value={formData.role || "client"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                               <option value="client">Client</option>
                                               <option value="systemAdmin">Admin</option>
                                     </select>
                                    </div>

                                    <div className="py-2">
                                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Privilage</label>
                                      <select onChange={(e) =>setFormData({ ...formData, controlled: e.target.value })} name="controlled" id="controlled"  value={formData.controlled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                               <option value={false}>Ban</option>
                                               <option value={true}>Allowed</option>
                                        
                                     </select>
                                    </div>


                                  
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                  </form>
                                  </div>
                            </div>
                          </div>
                        </div>

                </>):
                null}
                        </div>
                        </div>
                    </div>
                    </div>
                    
                 </div>
      </div>
    )
  }
  
  export default Users;
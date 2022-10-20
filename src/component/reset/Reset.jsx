import React,{useState,useEffect} from "react";
import { AiFillEye } from 'react-icons/ai';

import { useParams, useNavigate} from 'react-router-dom';
import { resetsub, reset } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Spinner from '../../component/Spinner'

import logo from "../../images/LogoPri-removebg.png";

const Reset=()=> {
  const navigate  = useNavigate();
 




  
    
  const [formData, setFormData] = useState({
    
    password: ''
  })

  const {  password } = formData
 
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  

const [passwordShown, setPasswordShown] = useState(false);

useEffect(() => {
    if (isError) {
      toast.error(message)
    }
        
  if (isSuccess ) {
    toast("Password reset sucessful, Try to sign in.")
 }


    // if (isSuccess || user) {
    //   navigate('/')
    // }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])



      
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  let { userId, token } = useParams();

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {

        password
    }


    dispatch(resetsub({userId ,token,password}))
    // console.log(`${userId}/${token}`);
  }

  if (isLoading) {
    return <Spinner />
  }

  const handleClickLogin = () => {
    // 👇️ navigate to /
    navigate('/');
  };
 
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
<div className="flex flex-col items-center   h-screen bg-cover overflow-auto bg-gradient-to-r from-stone-50 via-purple-50 to-gray-50"  >
  
  <div  className="flex mt-8 pb-2">
  <img src={logo} alt="logo"     className=" w-24 h-24 rounded-full custom-position " />
  </div>

    <div className="bg-white mb-8 rounded-2xl border shadow-xl p-10 sm:w-1/5 md:w-2/5 lg:w-2/5">
      <div className="flex flex-col items-center space-y-4">
      <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Reset PassWord</h1>
      <form onSubmit={onSubmit} className="space-y-4 md:space-y-6  w-full " >


             
            <div className="flex justify-center items-center">
                   <input onChange={onChange}  type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                 
                  <AiFillEye className="pl-1 font-extralight items-center " size={25}  onClick={togglePasswordVisiblity} />
                  </div>
              
      <button type="submit" className="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Reset </button>
      </form>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 w-full">
      
                   
                         <button onClick={handleClickLogin} className="text-blue-700 hover:underline dark:text-blue-500">SignIn?</button>
                    </div>
      </div>
    
    </div>
    
    </div>
  )
}

export default Reset;

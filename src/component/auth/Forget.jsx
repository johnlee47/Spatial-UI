import React,{useState,useEffect} from "react";
import { AiFillEye } from 'react-icons/ai';

import { useParams, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
import { forget, register, reset } from '../../features/auth/authSlice'
import Spinner from '../Spinner'
import logo from "../../images/LogoPri-removebg.png";

const Forget=({setReg,setForg,setLog})=> {
  const navigate  = useNavigate();

  const [formData, setFormData] = useState({
    email: ''
  })
  const [passwordShown, setPasswordShown] = useState(false);


  const { email } = formData


  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }


    if (isSuccess ) {
       toast("check your email in order to proceed")
     
       navigate('/')
     

    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

      const userData = {

        email,
    
      }

      dispatch(forget(userData))
     
  }

  if (isLoading) {
    return <Spinner />
  }



  const handleClickCreate = () => {
    // 👇️ navigate to /
    // navigate('/create');
    setLog(false);
    setReg(true);
    setForg(false);
  };

  const handleClickLogin = () => {
    // 👇️ navigate to /
    setLog(true);
    setReg(false);
    setForg(false);
    // navigate('/');
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
      <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Forget Password</h1>
      <form onSubmit={onSubmit} className="space-y-4 md:space-y-6  w-full " >

     
    
      <input onChange={onChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
    
        
              
      <button type="submit" className="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Forget</button>
      </form>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 w-full">
  
                        Already Have Account <button onClick={handleClickLogin} className="text-blue-700 hover:underline dark:text-blue-500">Sign In</button><br/><br/>
                         <button onClick={handleClickCreate} className="text-blue-700 hover:underline dark:text-blue-500">Create Account?</button>
                    </div>
      </div>
    
    </div>
    
    </div>
  )
}

export default Forget;

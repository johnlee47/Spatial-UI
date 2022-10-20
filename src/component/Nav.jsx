import React,{useState,useEffect} from "react";

import logo from "../images/LogoPri-removebg.png";
import { logout, reset } from '../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import decode from 'jwt-decode';
const Nav=()=>{

    const navigate = useNavigate()
    const [userauth, setUserauth] = useState(JSON.parse(localStorage.getItem('user')));




    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )
   

    useEffect(() => {
      const token = userauth?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) onLogout();
      }
  
    
    }, []);

    async function onLogout  ()  {
        dispatch(logout())
      
        navigate("/")
      }

      const adminDash=()=>{
        navigate('/admin-dashboard')
      }
    return(
        <div>
     <nav className="bg-white  px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="/" className="flex items-center">
      <img src={logo} alt="logo"  className="mr-3 w-12 md:w-18  lg:w-20 h-12" />
  <p className="text-black text-base hidden  md:block lg:block  focus:ring-4 focus:outline-none  font-medium rounded-lg  px-3 py-2.5 text-center mr-2 uppercase  font-sans" >Spatial Prism</p>

     
  </a>

  
  <div className="flex md:order-2">
  <p className="text-black  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 uppercase  font-mono" >{(userauth.result.name)}</p>

  {user?.result ? (
          
      
           <div>
            {(userauth.result.role == 'systemAdmin') && (
              <div className="flex mr-0">
            <div className="flex md:order-2">
            <button type="button" onClick={adminDash} className="text-black bg-stone-100 hover:bg-blue-100 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6  ">Manage</button>
        </div>
            

            {/* <div className="flex md:order-2">
            <button type="button" onClick={onLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign out</button>
        </div> */}
            </div>
            )
            }
              </div>

        ) : (
        
        null
        )}

      <button type="button" onClick={onLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign out</button>
  
  </div>

  </div>
</nav>
        </div>
    )
}

export default Nav;
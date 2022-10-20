import React, {useState,useEffect} from 'react';
import Users from './Users';
import logo from "../../images/LogoPri-removebg.png";
import { logout, reset } from '../../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Dashboard=()=>{
    const [fragment,setfragment] = useState("HOME")

    const navigate = useNavigate()
    const [userauth, setUserauth] = useState(JSON.parse(localStorage.getItem('user')));

    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )


    async function onLogout  ()  {
        dispatch(logout())
      
        navigate("/")
      }

    const loadFragmnet=()=>{
  
      switch(fragment){
     
      case "CATEGORY":
        return <Users/>
    //   case "LISTING":
    //       return <ListingFragment/>
    //   case "USERS":
    //         return <UsersFragment/>
      default: return <div>
         <div className="flex flex-col items-center justify-center  h-screen bg-cover overflow-auto ">
      <h2 className="p-4 pb-12 font-extrabold text-transparent text-sm md:text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Welcome Back
      </h2>
    </div></div>
      break;
  
  
      }
  
  
    }

    return (

        <div className='flex  items-stretch'>
                    <aside className="flex w-24 md:w-64 h-screen bg-gray-50 " aria-label="Sidebar">
        <div className="py-4 px-3  rounded ">
            <a href="#" className="flex items-center pl-2.5 mb-5">
                <img src={logo} className="mr-3 h-6 sm:h-7" alt="Logo" />
                <div className="self-center text-lg font-semibold invisible md:visible whitespace-nowrap text-black  uppercase  font-sans">Spatial Prism</div>
            </a>
            <ul className="space-y-2">
            
             
            
                <li>
                <button onClick={e=>setfragment("CATEGORY")} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    <div className="flex-1 uppercase  font-mono invisible md:visible text-black ml-3 whitespace-nowrap">Users</div>
                </button>
                </li>
             
                <li>
                <button onClick={onLogout} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" ><path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                    <div className="flex-1 uppercase  font-mono invisible md:visible ml-3 text-black whitespace-nowrap">Sign Out</div>
                </button>
                </li>
              
            </ul>
        </div>
        </aside>
        

        <div className=' w-screen bg-gray-200'>
          
        {loadFragmnet()}

        </div>
        </div>
    )
}


export default Dashboard;
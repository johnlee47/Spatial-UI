import React from "react";
import Nav from './Nav';
import { useParams, useNavigate} from 'react-router-dom';
import Ipsearch from "./pages/Ipsearch";

const Menu =()=>{


    const nav =useNavigate();
   const Ipsearchpage = () => {
  nav("/ip-search");
  };
 const Usersearchpage = () => {
    nav("/user-search");
    };

    const Phonesearchpage = () =>{
        nav('/phone-search');
    }

  
  
    return(

        <div className="flex flex-col   h-screen bg-cover overflow-auto bg-gradient-to-r from-stone-50 via-purple-50 to-gray-50"  >
        <div className=''>
        <Nav/>
        </div>

<div className="relative mt-6 py-16">  
    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                    <div className="space-y-2">
                        
                        <h2 className="text-2xl text-center text-cyan-900 font-bold">Menu</h2>
                    </div>
                    <div className="mt-8 grid space-y-4">
                        <button onClick={Ipsearchpage} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                hover:bg-sky-700 hover:text-white focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <a href="">
                                <div className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-white sm:text-base">IP Search</div>
                            </a>
                            </div>
                        </button>
                        <button onClick={Phonesearchpage} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:bg-sky-700 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                
                                <a href="">
                                <div className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-white sm:text-base">Phone Number Lookup</div>
                            </a></div>
                        </button>
                        <button onClick={Usersearchpage} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                             hover:bg-sky-700 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                 
                                <a href="">
                                <div className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-white sm:text-base">User Name</div>
                            </a></div>
                        </button>

                    </div>

                    <div className="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                        <p className="text-xs">If you need something that has a lot of features and provides you with a huge variety of information, structure then you must to have premium account.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>


        </div>
    )
}
export default Menu;
import React from "react";
import Nav from "../Nav";
const Ipsearch =()=>{


    return(
        <div className="flex flex-col   h-screen bg-cover overflow-auto bg-gradient-to-r from-stone-50 via-purple-50 to-gray-50"  >
                    <div className=''>
                    <Nav/>
                    </div>
                   <div className=" mt-28 lg:ml-14  lg:w-11/12">
                   <form >   
                    
                        <div className="flex relative items-center ">
                            <p className="text-gray-900 font-medium  bg-white p-4 pl-10  ">
                                IP
                            </p>
                        
                            <input type="search" id="default-search" className="block p-4 md:pl-10 lg:pl-10 w-full text-sm md:lg:text-md lg:text-md  text-black    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="555.555.555" required/>
                         
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-emerald-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                      
                        </div>
                    </form>
                   </div>

                 <div className="items-center justify-center">
                 <div className="flex flex-col bg-white  mt-4 lg:ml-14  lg:w-11/12">
                    <div className="overflow-x-auto sm:-mx-6 ">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    User Name
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Site
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Password
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                <tr className="bg-white border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                   Jacob
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                     www.eb.com
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    @323232/.312
                                </td>
                                </tr>

                                
                                <tr className="bg-white border-b">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Yonas
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    www.et.com
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    fatBi898997
                                </td>
                                </tr>


                          
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                 </div>


        </div>
    )
}
export default Ipsearch;
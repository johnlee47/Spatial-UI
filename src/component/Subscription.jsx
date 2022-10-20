import React,{useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';


import Nav from './Nav';
const Subscription=()=> {
  const [showModal, setShowModal] = useState(false);
  const nav=useNavigate();


  const Freepage = () => {
  nav("/menu")
  };
  


    return(
//  <div className="flex flex-col items-center   h-screen bg-cover overflow-auto" style={{ backgroundImage: `url(${backgroundsub})`,  backgroundSize: 'cover'}}>
 <div>
<div className="flex flex-col   h-screen bg-cover overflow-auto bg-gradient-to-r from-stone-50 via-purple-50 to-gray-50"  >
<div className=''>
<Nav/>
</div>

    

            <div className='flex justify-center mt-24'>
    <div className="py-4 px-8 bg-stone-200 bg-opacity-25  rounded-2xl text-center ">

            <h1 className=' text-gray-800 font-bold text-xl'>Choose Subscription </h1>
            </div>
            </div>
       
        <div className='flex flex-col  md:flex-row lg:flex-row space-y-8  lg:space-y-0 md:lg:space-y-0 md:space-x-24 md:mx-4 lg:space-x-24 py-12  md:justify-center  lg:justify-center items-center '>
          

        <div onClick={Freepage} className="flex flex-col shadow-xl w-60   sm:w-60 sm:h-72 md:w-96 md:h-72 lg:w-96 lg:h-72 bg-white rounded-2xl transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer ">

          <div className="py-6 px-14 bg-gradient-to-tr from-emerald-400 to-emerald-200 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
          
            <h4 className="text-white text-center font-bold text-xl">
                Free

            </h4>
          </div>
          <div className="flex flex-col py-6 px-8 space-y-5  ">
            <p className='text-left text-gray-600 text-sm'> -Ip Search</p>
            <p className='text-left text-gray-600 text-sm'> -Phone Contact Lookup</p>
            <p className='text-left text-gray-600 text-sm'> -User Name</p>


          </div>
          </div>





        <div   onClick={() => setShowModal(true)} className="flex  bg-white rounded-2xl  flex-col shadow-xl w-60 h-72   sm:w-60 sm:h-72 md:w-96 md:h-72 lg:w-96 lg:h-72 transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
  
    <div className="py-6 px-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
    
      <h4 className="text-white text-center font-bold text-xl">
      Premium<br />
       
      </h4>
    </div>
    <div className="flex flex-col py-6 px-8 space-y-5 ">
    <p className='text-left text-gray-600 text-sm'> -Cross Reference Search</p>
    <p className='text-left text-gray-600 text-sm'> -Web Scrape Information From Public services</p>

      <p className='text-left text-gray-600 text-sm'> -Phone Contact Lookup</p>
      <p className='text-left text-gray-600 text-sm'> -Investigator</p>

    </div>
  </div>


  {showModal ? (
  
  <>
 <div className="flex   overflow-auto backdrop-blur-sm bg-white/30  justify-center items-center fixed inset-0 z-1 focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-end justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="text-black opacity-7 text-xl block  rounded-full">
                      x
                    </div>
                  </button>
                </div>
       
  
  <div className="relative">
    <h2 className="p-4 pb-12 font-extrabold text-transparent text-sm md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
>
      Coming
  
      Soon
    </h2>
  </div>
              </div>
            </div>
          </div>

  </>):
  null}




  </div>

  </div>
  </div>
    )
}
export default Subscription;
import React from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import { useNavigate } from 'react-router-dom';


const Cms = () => {
  

  const navigate = useNavigate();




  const handleAccount = () => {
  
    navigate("/Settings");
  };
  
  const handleCms = () => {
   ;
    navigate("/Cms");
  };
  
  const handleSecurity = () => {
    navigate("/Security");
  };

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-[70px] left-[70px]">
        <Admin />
        <div className="my-10 ml-10 mr-8 bg-white p-10 w-full min-h-screen">
          {/* Header */}
          <div className="flex gap-5 items-center">
            <button 
              onClick={handleAccount} 
             className='text-gray-400 hover:text-black lg:w-[150px] md:w-[120px] w-[60px]'>
              Account
            </button>
            <button onClick={handleCms}          className={`text-gray-400 hover:text-black border-b-4 lg:w-[150px] md:w-[120px] w-[60px] border-blue-400 font-semibold'
              }`}>CMS</button>
            <button onClick={handleSecurity} className='text-gray-400 hover:text-black lg:w-[150px] md:w-[120px] w-[60px]'>Security</button>
          </div>


          <div className='lg:w-[420px] md:w-[420px] w-[230px] h-[202px] rounded-md bg-[#3C60FF] p-10 mt-10'>
               <h3 className='text-white'>Current Theme</h3>
          </div>
          <div className='mt-5'>
            <h3>Available Theme</h3>
            <div className='lg:flex md:flex grid grid-cols-5   mt-3 gap-3  '>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px]   rounded-3xl cursor-pointer bg-[#43E3F2]'></div>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px] rounded-3xl cursor-pointer bg-[#3C60FF]'></div>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px] rounded-3xl cursor-pointer bg-[#68CF29]'></div>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px] rounded-3xl cursor-pointer bg-[#28CAC0]'></div>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px] rounded-3xl cursor-pointer bg-[#DF36E2]'></div>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px] rounded-3xl cursor-pointer bg-[#A563EB]'></div>
                <div className='lg:w-[36.67px] lg:h-[36px] md:w-[36.67px] md:h-[36px] w-[30.67px] h-[25px] rounded-3xl cursor-pointer bg-[#FF0A0AE5]'></div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Cms;
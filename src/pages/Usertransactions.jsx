import React from 'react'
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import threedot from '../Cacrassets/ThreeDots.png';
import arrowfall from '../Cacrassets/ArrowFall.png';
import Walletbalance from '../components/Cacr-components/Walletbalance';


const  Userstransactions = () => {
 

  return (
    <div className="flex bg-[#F9F9FA] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px]  md:left-[62px] left-16">
        <Admin />
      <div className='m-10'>
      <div className='flex gap-5 font-bold  '>
           <h3> User Transactions</h3>
          <div className='bg-[#eeecec] w-[30px] h-[30px] p-1 rounded-md'>
          <img src={threedot} alt=""  />
          </div>
        </div>
         
         
       

       <div className=' lg:flex md:grid md:grid-cols-3 grid grid-cols-1 gap-5 my-5 '>
        <div className='w-[226px] h-[124px] p-5   rounded-md bg-[#E6FDEB] '>
            <h3 className= "font-bold">Total Transactions </h3>
            <div className='  mt-5'>
                <h3 className='text-[#0A4708] font-bold'>NGN 10,000,000</h3>
                <div className='flex gap-5 justify-end '>
                    <h3>-0.15%</h3>
                    <img src={arrowfall} alt=""  />

                </div>

            </div>


        </div>
        <div className='w-[226px] h-[124px] p-5  rounded-md bg-[#FDE6EC] '>
            <h3 className= "font-bold">Total Profit </h3>
            <div className='  mt-5'>
                <h3 className='text-[#47082C] font-bold'>NGN 250,0000</h3>
                

            </div>


        </div>
        <div className='w-[226px] h-[124px] p-5   rounded-md  bg-[#E6F1FD] '>
            <h3 className= "font-bold">Today's Transaction  </h3>
            <div className=' mt-5'>
                <h3 className='text-[#100847] font-bold'>NGN 250,0000</h3>
              

            </div>
       </div>
        
        <div className='w-[226px] h-[124px] p-5  rounded-md bg-[#EDEEFC]'>
            <h3 className= "font-bold">March Sales </h3>
            <div className=' flex gap-10 mt-5'>
                <h3 className='text-[20px] text-[#440847] font-bold'>NGN 3,000.000</h3>
                

            </div>


        </div>
        
       </div>       
        <Walletbalance/>
  
      </div>

        </div>

        
      
    </div>
  );
};

export default Userstransactions;
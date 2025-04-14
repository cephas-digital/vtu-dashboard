import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import threedot from '../Cacrassets/ThreeDots.png';
import userIcon from '../Cacrassets/usertwo.png';
import arrowfall from '../Cacrassets/ArrowFall.png'
import { Link } from 'react-router-dom';
import UsersData from './Users'

const  Allsales = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-20 left-20">
        <Admin />
        <div className="my-10 ml-10 mr-8">
          {/* Header */}
          <div className=" lg:flex md:flex grid gap-5 items-center">
            <h3 className="font-bold py-2">All-Users</h3>
            <div className='flex gap-2'>
            <Link  to="/Standalonesales" className="border-blue-300 rounded-md border-2 lg:w-[150px]  md:w-[150px] w-[105px] h-[40px]  py-2 text-center font-semibold">
            Stand-alones
            </Link>
            <Link to = "/Affiliatesales" className="border-blue-300 rounded-md pl-2 border-2 lg:w-[650px] md:w-[390px] w-[85px] h-[40px]  py-2 font-semibold">
              Affiliates
            </Link>

            <div className="bg-[#eeecec] w-[40px] h-[40px] rounded-md flex items-center justify-center">
              <img src={threedot} alt="Options" />
            </div>
            </div>
           
          </div>

          <div className='lg:flex md:flex  grid    text-center gap-5 my-10'>
          <div className='w-[226px] h-[124px]  rounded-md bg-[#E6FDEB] py-5 '>
              <h3 className='font-semibold py-2'> All Transactions</h3>
              <h3 className='text-2xl font-bold text-[#0A4708]'>NGN 10,000,0000 </h3>
              <div className='flex gap-2 justify-end mx-2'>
              <h3>-0.15%</h3>
              <img src={arrowfall} className='w-[20px] h-[20px]' alt="" />
              </div>
          </div>
          <div className='w-[226px] h-[124px] rounded-md bg-[#EDEEFC] py-5'>
              <h3 className='font-semibold py-2'>Affiliates</h3>
              <h3 className='text-2xl font-bold text-[#440847]'>NGN 3,0000,000</h3>
          </div>
          <div className='w-[226px] h-[124px] rounded-md bg-[#E6F1FD] py-5'>
              <h3 className='font-semibold py-2'>Stand-alone</h3>
              <h3 className='text-2xl font-bold text-[#100847]'>NGN 250,000 </h3>
          </div>
        </div>


        </div>

  <div className='overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden px-4' >

  <div 
   className="grid grid-cols-6 md:gap-10 lg:gap-10 gap-2 py-3 lg:w-[1050px] md:w-[1200px] w-[900px] px-5 rounded-md text-[grey] font-semibold"
  >
    <h3 className="text-left mr-[10px]">Name</h3>
    <h3 className="text-left">Total Transactions</h3>
    <h3 className="text-left ">Phone number</h3>
    <h3 className="text-left">Email address</h3>
    <h3 className="text-left">Date Joined</h3>
    <h3 className="text-left ml-2">Actions</h3>
  </div>

  {users.map((user, index) => (
    <div
      key={index}
      className="grid grid-cols-6 items-center md:gap-10 lg:gap-10 gap-2 lg:w-[1050px] md:w-[1200px] w-[900px] rounded-s-2xl bg-[#fdfdfd] my-1 px-5 py-3"
    >
      <div className="flex items-center gap-2 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <img src={userIcon} alt="User" className="w-[20px] h-[20px]" />
        <h3 className=' '>{user.name}</h3>
      </div>
      <h3 className="col-span-1 ">NGN{user.transactions}</h3>
      <h3 className="col-span-1 ">{user.phone}</h3>
      <h3 className="col-span-1 ">{user.email}</h3>
      <h3 className="col-span-1 ">{user.dateJoined}</h3>
      <Link
        to="/Usertransactions"
        className="text-[#3C60FF] col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1"
      >  
       View Sales
      </Link>  
   </div>
  ))}

  </div>

      </div>
    </div>
  );
};

export default Allsales;
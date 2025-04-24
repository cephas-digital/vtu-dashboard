import React, { useEffect } from 'react'
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import userIcon from '../Cacrassets/usertwo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UsersData from './Users'; 
import Newnotifications from './Newnotifications';
import Upgradesucess from './Upgradesucess';

const Incomingnotifications = () => {
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(UsersData);
  }, []);
 const handleNotifications=()=>{
  setShowOverlaytwo(true)
 }
 const [showOverlay, setShowOverlay] = useState(false);
 const [showOverlaytwo, setShowOverlaytwo] = useState(false);

 useEffect(() => {
   setUsers(UsersData);
 }, []);

 const handleViewMessage = () => {
   setShowOverlay(true);
 };
 const handleCloseOverlay = () => {
   setShowOverlay(false);
   setShowOverlaytwo(false);
 };
 

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-[62px] left-[62px] ">
        <Admin />
        <div className="my-10 ml-10 mr-8">
          {/* Header */}
          
           <div className=" lg:flex md:flex grid gap-5 items-center ">
                  <h3 className="font-bold py-2">Incoming</h3>
                  <div className='flex gap-2'>
                  <Link  to="/Allnotifications" className="border-blue-300 rounded-md border-2 lg:w-[150px]  md:w-[150px] w-[130px] h-[40px]  py-2 text-center font-semibold">
                  All Notifications
                  </Link>
                  <Link to="/Outgoingnotifications"  className="border-blue-300 rounded-md  pl-2 border-2 lg:w-[550px] md:w-[290px] w-[95px] h-[40px]  py-2 font-semibold">
                  Outgoing
                  </Link>
                  </div>
                  <button className='w-[150px] h-[50px] text-white rounded-2xl  bg-[#3C60FF]' onClick={handleNotifications}>Send notifications</button>
            </div>

          
        </div>

        

        {/* User List Table */}
        <div className='overflow-auto lg:overflow-hidden md:overflow-auto mx-5'>
      
          <div className="grid grid-cols-4 lg:w-[1050px] md:w-[1200px] w-[900px] py-3 px-5 rounded-md text-[grey] font-semibold">
            <h3 className="text-left">Sender</h3>
       
            <h3 className="text-left">Title</h3>
           
            <h3 className="text-left">Date Sent</h3>
            <h3 className="text-left">Actions</h3>
          </div>

          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={index} className="grid grid-cols-4 lg:w-[1050px] md:w-[1200px] w-[900px] items-center bg-[#fdfdfd] my-1 px-3 py-3 rounded-md">
                <div className="flex items-center gap-2">
                  <img src={userIcon} alt="User" className="w-[20px] h-[20px]" />
                  <h3>{user.name}</h3>
                </div>
                <h3>{user.Title}</h3>
                <h3>{user.dateJoined}</h3>
                <h3 onClick={handleViewMessage} className='cursor-pointer text-[#3C60FF]'>View message</h3>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-5">No users found.</p>
          )}
       
        </div>
      </div>
       <div className='cursor-pointer' onDoubleClick={handleCloseOverlay} >
       {showOverlay && <Upgradesucess onClose={() => setShowOverlay(false)} />}
       </div>
      <div className='cursor-pointer' onDoubleClick={handleCloseOverlay}>
      {showOverlaytwo && <Newnotifications onClose={() => setShowOverlaytwo(false)} />}
      </div>
          
    </div>
  );
};

export default Incomingnotifications;

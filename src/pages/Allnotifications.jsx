
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import userIcon from '../Cacrassets/usertwo.png';
import { Link } from 'react-router-dom';
import UsersData from './Users';
import Upgradesucess from './Upgradesucess';

const Allnotifications = () => {
  const [users, setUsers] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  const handleViewMessage = () => {
    setShowOverlay(true);
  };
  const closeOverlay=()=>{
    setShowOverlay(false)
  }
 
  return (
    <div className="flex bg-[#f8f7f7] min-h-screen relative">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-20 left-20 ">
        <Admin />
        <div className="my-10 ml-10 mr-8">
         

          <div className=" lg:flex md:flex grid gap-5 items-center ">
                    <h3 className="font-bold py-2">All Notifications</h3>
                    <div className='flex gap-2'>
                    <Link  to="/Incomingnotifications" className="border-blue-300 rounded-md border-2 lg:w-[150px]  md:w-[150px] w-[100px] h-[40px]  py-2 text-center font-semibold">
                    Incoming
                    </Link>
                    <Link to="/Outgoingnotifications"  className="border-blue-300 rounded-md  pl-5 border-2 lg:w-[650px] md:w-[390px] w-[120px] h-[40px]  py-2 font-semibold">
                    Outgoing
                    </Link>
        
                   
                    </div>
            </div>
           <div className='lg:overflow-hidden md:overflow-auto overflow-auto '>
          <div className="grid grid-cols-6  py-3 lg:w-[1050px] md:w-[1200px] w-[900px]  rounded-md  mt-10 text-[grey] font-semibold">
            <h3 className="text-left">Sender</h3>
            <h3 className="text-left">Sent to</h3>
            <h3 className="text-left">Title</h3>
            <h3 className="text-left"> Sender Email address</h3>
            <h3 className="text-left">Date Sent</h3>
            <h3 className="text-left">Actions</h3>
          </div> 
           
          <div className="">
            {users.length > 0 ? (
              users.map((user, index) => (
                <div key={index} className="grid grid-cols-6 lg:w-[1050px] md:w-[1200px] w-[900px] items-center bg-[#fdfdfd] my-1 px-3 py-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <img src={userIcon} alt="User" className="w-[20px] h-[20px]" />
                    <h3>{user.name}</h3>
                  </div>
                  <h3>{user.name}</h3>
                  <h3>{user.Title}</h3>
                  <h3>{user.email}</h3>
                  <h3>{user.dateJoined}</h3>
                  <h3 className="text-[#3C60FF] cursor-pointer" onClick={handleViewMessage}>
                    View message
                  </h3>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-5">No users found.</p>
            )}
          </div>
          
          </div>
        </div>
      </div>

      {/* Overlay Component */}
     <div className='cursor-pointer' onDoubleClick={closeOverlay}>
     {showOverlay && <Upgradesucess onClose={() => setShowOverlay(false)} />}
     </div>
    </div>
  );
};

export default Allnotifications;






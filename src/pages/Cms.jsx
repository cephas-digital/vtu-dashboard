

import React, { useState,useEffect } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import { useNavigate } from 'react-router-dom';
import userIcon from '../Cacrassets/firstUser.png'
import { Link } from 'react-router-dom';
import UsersData from './Users'

const Cms = () => {
  const [active, setActive] = useState(false);
   const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
       setUsers(UsersData);
       }, []);
    
  // Form state management


  const handleAccount = () => {
  
    navigate("/Settings");
  };
  
  const handleCms = () => {
    setActive(true);
    navigate("/Cms");
  };
  
  const handleSecurity = () => {
    navigate("/Security");
  };

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-16 left-16">
        <Admin />
        <div className="my-10 ml-10 mr-8 bg-white p-10 w-full min-h-screen">
          {/* Header */}
          <div className="flex gap-5 items-center">
            <button 
              onClick={handleAccount} 
             className='text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[60px]'>
              Account
            </button>
            <button onClick={handleCms}  className={`text-gray-400 hover:text-black border-b-4 lg:w-[150px] md:w-[150px] w-[60px] border-blue-400 font-semibold'
              }`}>CMS</button>
            <button onClick={handleSecurity} className='text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[60px]'>Security</button>
          </div>


          <div className='overflow-auto md:overflow-auto lg:overflow-hidden'>
   
          <div className='m-5 lg:w-[1050px] md:w-[1200px] w-[900px] ' >
            <h3 className='font-semibold'>Manage Users</h3>
            
          </div>
          <div className="grid  grid-cols-3 lg:w-[1000px] md:w-[1200px] w-[900px]  text-center  py-3 mx-5 rounded-md text-[grey] font-semibold">
            <h3 className="text-left">Name</h3>
            <h3 className="text-left">Company Name</h3>
            <h3 className="text-left">Actions</h3>
          </div>

          {users.map((user, index) => (
            <div key={index} className="grid  grid-cols-3 lg:w-[1050px] md:w-[1200px] w-[900px] items-center  rounded-s-2xl  my-1 px-5 py-3">
              <div className="flex items-center gap-2">
                <img src={userIcon} alt="User" className="w-[20px] h-[20px]" />
                <h3>{user.name}</h3>
              </div>
             
             
              <h3>{user.companyname}</h3>
              <Link to="/Manageuser" className="text-[#3C60FF]">Manage User</Link>
            </div>
          ))}
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cms;
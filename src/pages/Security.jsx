import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import { useNavigate } from 'react-router-dom';
import UsersData from './Users';
import Action from '../components/Cacr-components/Action';

const Security = () => {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  // Form state management
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOverlay, setShowOverlay] = useState('')

  const handleAccount = () => {
    navigate('/Settings');
  };

  const handleCms = () => {
    navigate('/Cms');
  };

  const handleSecurity = () => {
   
    navigate('/Security');
  };
  const handleCloseOverlay=()=> {
    setShowOverlay(false)
  }
  const handleUpdate = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New password and confirmation do not match');
      return;
    }
   setShowOverlay(true)
  
  };

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px]  md:left-10 left-[62px]  ">
        <Admin />
        <div className="my-10 lg:ml-10 md:ml-10 ml-5 mr-8 bg-white p-10 w-full min-h-screen">
          {/* Header */}
          <div className="flex gap-5 items-center">
            <button onClick={handleAccount} className="text-gray-400    hover:text-black lg:w-[150px] md:w-[150px] w-[70px]">
              Account
            </button>
            <button onClick={handleCms} className="text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[50px]">
              CMS
            </button>
            <button
              onClick={handleSecurity}
              className={`text-gray-400 hover:text-black border-b-4 lg:w-[150px] md:w-[150px] w-[50px] border-blue-400 font-semibold'
              }`}
            >
              Security
            </button>
          </div>

          <div>
            <div className="my-5">
              <h3 className="font-bold">Change Password</h3>
            </div>
           
            <div>
              <h3>Current Password</h3>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="h-[50px] lg:w-[510px] md:w-[510px] w-[225px] rounded-2xl border-2 border-[#DFEAF2] my-2 px-4 outline-none"
                placeholder="Current Password"
              />
            </div>
            <div>
              <h3>New Password</h3>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-[50px] lg:w-[510px] md:w-[510px] w-[225px] rounded-2xl border-2 border-[#DFEAF2] my-2 px-4 outline-none"
                placeholder="New Password"
              />
            </div>
            <div>
              <h3>Confirm Password</h3>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-[50px] lg:w-[510px] md:w-[510px] w-[225px]  rounded-2xl border-2 border-[#DFEAF2] my-2 px-4 outline-none"
                placeholder="Confirm Password"
              />
            </div>
            <div className="my-7">
              <button
                onClick={handleUpdate}
                className="w-[190px] h-[50px] rounded-2xl bg-[#3C60FF] text-white mr-10"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='cursor-pointer' onDoubleClick={handleCloseOverlay} >
             {showOverlay &&  <Action onClose={() => setShowOverlay(false)} action= "Updated your password" />}
             </div>
    </div>
  );
};

export default Security;


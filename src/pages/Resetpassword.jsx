import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import { useNavigate } from 'react-router-dom';
import UsersData from './Users';

const Security = () => {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  // Form state management
  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAccount = () => {
    navigate('/Settings');
  };

  const handleCms = () => {
    navigate('/Cms');
  };

  const handleSecurity = () => {
   
    navigate('/Security');
  };

  const handleSend = () => {
    if ( !newPassword || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New password and confirmation do not match');
      return;
    }
    alert('Password reset successfully!');
  
  };

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-10 left-10">
        <Admin />
        <div className="my-10 ml-10 mr-8 bg-white p-10 w-full min-h-screen">
          {/* Header */}
          <div className="flex gap-5 items-center">
            <button onClick={handleAccount} className="text-gray-400    hover:text-black lg:w-[150px] md:w-[150px] w-[50px]">
              Account
            </button>
            <button onClick={handleCms} className="text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[50px] border-b-4  border-blue-400 font-semibold">
              CMS
            </button>
            <button
              onClick={handleSecurity}
              className={`text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[50px]'
              }`}
            >
              Security
            </button>
          </div>

          <div>
            <div className="my-5">
              <h3 className="font-bold">Reset Password</h3>
            </div>
           
           
            <div>
              <h3>New Password</h3>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-[50px] w-[510px] rounded-2xl border-2 border-[#DFEAF2] my-2 px-4 outline-none"
                placeholder="New Password"
              />
            </div>
            <div>
              <h3>Confirm Password</h3>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-[50px] w-[510px] rounded-2xl border-2 border-[#DFEAF2] my-2 px-4 outline-none"
                placeholder="Confirm Password"
              />
            </div>
            <div className="my-10">
              <button
                onClick={handleSend}
                className="w-[190px] h-[50px] rounded-2xl bg-[#3C60FF] text-white mr-10"
              >
                Send Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;

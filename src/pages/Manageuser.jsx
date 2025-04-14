import React, { useState } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import userIcon from '../Cacrassets/firstUser.png';
import companyicon from '../Cacrassets/company_icon.png'
import Newnotifications from './Newnotifications';
import Disableuser from './Disableuser';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cms = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showDisableUserModal, setShowDisableUserModal] = useState(false);
  const navigate = useNavigate();
  
  const handleAccount = () => {
  
    navigate("/Settings");
  };
  
  const handleCms = () => {
    navigate("/Cms");
  };
  
  const handleSecurity = () => {
    navigate("/Security");
  };
  const handleCloseOverlay=()=>{
    setShowNotificationModal(false)
    setShowDisableUserModal(false)
  }



  return (
    <div className="flex bg-[#f8f7f7] min-h-screen relative">
      <Sidebar />
      <div className={`w-full transition duration-300 relative lg:left-[200px] md:left-[70px] left-[70px] ${showNotificationModal || showDisableUserModal ? 'opacity-30 pointer-events-none' : ''}`}>
        <Admin />
        <div className="my-10 ml-5  bg-white p-10 w-full min-h-screen">
          {/* Tabs */}
          <div className="flex gap-5 items-center">
            <button 
              onClick={handleAccount} 
             className='text-gray-400 hover:text-blacklg:w-[150px] md:w-[150px] w-[70px]'>
              Account
            </button>
            <button onClick={handleCms}  className={`text-gray-400 hover:text-black border-b-4 lg:w-[150px] md:w-[150px] w-[70px] border-blue-400 font-semibold'
              }`}>CMS</button>
            <button onClick={handleSecurity} className='text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[70px]'>Security</button>
          </div>

          {/* User Info */}
          <div>
            <div className='lg:flex md:flex grid gap-2 my-10 justify-between w-[700px]'>
              <div className='lg:flex md:flex grid gap-5'>
                <img src={userIcon} alt="" className='w-[100px] h-[100px]' />
                <div>
                  <h3 className='py-1 font-bold'>Natasha Jones</h3>
                  <h3 className='pb-2'>natashajones34@gmail.com</h3>
                  <h3 className='py-1'>+234 701222 3333</h3>
                </div>
              </div>
              <hr className='w-[3px] h-[100px] bg-blue-700 lg:grid md:grid hidden' />
              <hr className='w-[200px] h-[3px] bg-blue-700 lg:hidden md:hidden grid' />
              <div className='lg:flex md:flex grid gap-5'>
                <img src={companyicon} alt="" className='w-[100px] h-[100px] rounded-3xl' />
                <div>
                  <h3 className='py-1 font-bold'>Company name</h3>
                  <h3 className='pb-2'>natashajones34@gmail.com</h3>
                  <h3 className='py-1'>+234 701222 3333</h3>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='lg:flex md:grid md:grid-cols-4 grid grid-cols-1 gap-1 text-center'>
              <h3 onClick={() => setShowNotificationModal(true)} className='w-[150px] h-[30px] border-2 cursor-pointer border-[#3C60FFB2]  rounded-md'>Send Notifications</h3>
             <Link to="/Allsales" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
               Manage Sales
               </Link>
              <h3 onClick={() => setShowDisableUserModal(true)} className='w-[160px] h-[30px] border-2 border-[#3C60FFB2] cursor-pointer rounded-md'>Disable User</h3>
              <Link to="/dashboard" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
                       Go to Dashboard</Link>
                       <Link to="/Theme" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
                      Update Theme</Link>
                     <Link to ="/Brandstyles"className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
                      Update brand style</Link>
              <Link to="/Resetpassword" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
                                Reset password</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {showNotificationModal && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50 cursor-pointer" onDoubleClick={handleCloseOverlay}>
          <Newnotifications onClose={() => setShowNotificationModal(false)} />
        </div>
      )}

      {showDisableUserModal && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50" onDoubleClick={handleCloseOverlay}>
          <Disableuser onClose={() => setShowDisableUserModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Cms;

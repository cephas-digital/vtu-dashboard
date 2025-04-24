import React, { useState } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import threedot from '../Cacrassets/ThreeDots.png';
import userIcon from '../Cacrassets/Kunle.png';
import arrowrise from '../Cacrassets/Arrowrise.png';
import { Link } from 'react-router-dom';
import companyicon from '../Cacrassets/company_icon.png';
import Newnotifications from './Newnotifications';
import Disableuser from './Disableuser';
import Action from '../../src/components/Cacr-components/Action'; // Make sure this component exists

const Alluserdetails = () => {
  const [showNewNotification, setShowNewNotification] = useState(false);
  const [showDisableUser, setShowDisableUser] = useState(false);
  const [showAction, setShowAction] = useState(false);

  const handleShowNewNotification = () => {
    setShowNewNotification(true);
  };

  const handleShowDisableUser = () => {
    setShowDisableUser(true);
  };

  const handleCloseOverlay= () => {
    setShowNewNotification(false);
    setShowDisableUser(false);
    // setShowAction(true);
  };

  return (
    <div className="flex bg-[#F9F9FA] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] left-14">
        <Admin />
        <div className='m-10'>
          {/* HEADER */}
          <div className='flex gap-5 font-bold'>
            <h3> User Details</h3>
            <div className='bg-[#eeecec] w-[30px] h-[30px] p-1 rounded-md'>
              <img src={threedot} alt="" />
            </div>
          </div>

          {/* USER DETAILS */}
          <div className='lg:flex md:flex grid gap-5  my-10 justify-between  w-[700px] '>
            <div className='lg:flex md:flex grid gap-5'>
              <img src={userIcon} alt="" className='w-[100px] h-[100px]' />
              <div>
                <h3 className='py-1 font-bold'> Natasha Jones</h3>
                <h3 className='pb-2'>natashajones34@gmail.com</h3>
                <h3 className='py-1'>+234 701222 3333</h3>
              </div>
            </div>
            <hr className='w-[3px] h-[100px] bg-blue-700 lg:block md:block hidden' />
            <hr className='w-full h-[3px] bg-blue-700 lg:hidden md:hidden block' />
            <div className='lg:flex md:flex grid gap-5'>
              <img src={companyicon} alt="" className='w-[100px] h-[100px]  ml-2' />
              <div>
                <h3 className='py-1 font-bold'>Company name</h3>
                <h3 className='pb-2'>natashajones34@gmail.com</h3>
                <h3 className='py-1'>+234 701222 3333</h3>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className='lg:flex md:grid md:grid-cols-3 grid grid-cols-1 gap-5'>
            <div className='w-[202px] h-[112px] p-5  rounded-md bg-[#EDEEFC] '>
              <h3>New Users </h3>
              <div className=' flex  mt-5'>
                <h3 className='text-[#440847] font-bold'>300</h3>
                <div className='flex gap-3'>
                  <h3 className='text-[10px] mt-1'>+10%</h3>
                  <img src={arrowrise} alt="" className='w-[20px] h-[20px]' />
                </div>
              </div>
            </div>
            <div className='w-[202px] h-[112px] p-5  rounded-md  bg-[#E6F1FD] '>
              <h3>Active Users </h3>
              <div className=' flex gap-10 mt-5'>
                <h3 className='text-[#100847] font-bold'>2500</h3>
                <div className='flex gap-4'>
                  <h3 className='text-[navy]'>+12.05%</h3>
                  <img src={arrowrise} alt="" className='w-[15px] h-[15px]' />
                </div>
              </div>
            </div>
            <div className='w-[202px] h-[112px] p-5  rounded-md bg-[#FDE6EC] '>
              <h3>Today's Sales </h3>
              <div className=' flex gap-10 mt-5'>
                <h3 className='text-[20px] text-[#47082C] font-bold'>NGN 250.000</h3>
              </div>
            </div>
            <div className='w-[202px] h-[112px] p-5  rounded-md bg-[#E6FBFD]'>
              <h3>March Sales </h3>
              <div className=' flex gap-10 mt-5'>
                <h3 className='text-[20px] text-[#084745] font-bold'>NGN 2,500.000</h3>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className='my-8 font-bold'>
            <h3>All Actions</h3>
          </div>

          <div className='lg:flex md:grid md:grid-cols-4 grid grid-cols-1 gap-2 text-center'>
            <button
              className='w-[150px]  h-[30px] border-2 border-[#3C60FFB2] rounded-md'
              onClick={handleShowNewNotification}
            >
              Send Notifications
            </button>
            <Link to="/Allsales" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
              Manage Sales
            </Link>
            <button
              className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'
              onClick={handleShowDisableUser}
            >
              Disable User
            </button>
            <Link to="/dashboard" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
              Go to Dashboard
            </Link>
            <Link to="/Theme" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
              Update Theme
            </Link>
            <Link to="/Brandstyles" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
              Update brand style
            </Link>
            <Link to="/Resetpassword" className='w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md'>
              Reset password
            </Link>
          </div>
        </div>
      </div>

      {/* New Notification Modal */}
      {showNewNotification && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center cursor-pointer'     onDoubleClick={handleCloseOverlay}>
          <Newnotifications onClose={handleCloseOverlay} />
        </div>
      )}

      {/* Disable User Modal */}
      {showDisableUser && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center cursor-pointer' onDoubleClick={handleCloseOverlay}>
          <Disableuser onClose={handleCloseOverlay} />
        </div>
      )}

      {/* Action Modal After Others */}
      {showAction && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center cursor-pointer' onDoubleClick={handleCloseOverlay}>
          <Action onClose={() => setShowAction(false)}  />
        </div>
      )}
     
    </div>
  );
};

export default Alluserdetails;

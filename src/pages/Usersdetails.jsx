import React, { useState } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import threedot from '../Cacrassets/ThreeDots.png';
import userIcon from '../Cacrassets/Natasha.png';
import arrowrise from '../Cacrassets/Arrowrise.png';
import arrowfall from '../Cacrassets/ArrowFall.png';
import { Link } from 'react-router-dom';
import userfour from '../Cacrassets/Userfour.png';
import Newnotifications from './Newnotifications'; // import Newnotifications component
import DisableUser from './Disableuser'; // import DisableUser component

const Usersdetails = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayComponent, setOverlayComponent] = useState(null);

  const handleOverlay = (component) => {
    if (component === 'NewNotifications') {
      setOverlayComponent(<Newnotifications onClose={closeOverlay} />);
    } else if (component === 'DisableUser') {
      setOverlayComponent(<DisableUser />);
    }
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayComponent(null);
  };

  return (
    <div className="flex bg-[#F9F9FA] min-h-screen relative">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-20 left-20">
        <Admin />
        <div className=" m-5 p-5">
          <div className="flex gap-5 font-bold">
            <h3> User Details</h3>
            <div className="bg-[#eeecec] w-[30px] h-[30px] p-1 rounded-md">
              <img src={threedot} alt="" />
            </div>
          </div>

          <div className="lg:flex md:flex grid  gap-5 my-10 justify-between w-[700px]">
            <div className="lg:flex md:flex grid gap-5">
              <img src={userIcon} alt="" className="w-[100px] h-[100px]" />
              <div>
                <h3 className="py-1 font-bold"> Natasha Jones</h3>
                <h3 className="pb-2">natashajones34@gmail.com</h3>
                <h3 className="py-1">+234 701222 3333</h3>
              </div>
            </div>
            <hr className='w-[3px] h-[100px] bg-blue-700 lg:block md:block hidden' />
            <hr className='w-full h-[3px] bg-blue-700 lg:hidden md:hidden block' />
            <div className="lg:flex md:flex grid  gap-5">
              <img
                src={userfour}
                alt=""
                className="w-[100px] h-[100px] ml-2"
              />
              <div>
                <h3 className="py-1 font-bold">Company name</h3>
                <h3 className="pb-2">natashajones34@gmail.com</h3>
                <h3 className="py-1">+234 701222 3333</h3>
              </div>
            </div>
          </div>

          <div className="lg:flex md:flex grid  gap-5">
            {/* Add your other components here */}
            <div className="w-[202px] h-[112px] p-5  rounded-md bg-[#E6FDEB]">
              <h3>Affiliate Users </h3>
              <div className="flex gap-10 mt-5">
                <h3 className="text-[#0A4708] font-bold">1000</h3>
                <div className="flex gap-5">
                  <h3>-0.15%</h3>
                  <img src={arrowfall} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[202px] h-[112px] p-5 rounded-md bg-[#EDEEFC]">
              <h3>New Users </h3>
              <div className="flex mt-5">
                <h3 className="text-[#440847] font-bold">300</h3>
                <div className="flex gap-3">
                  <h3 className="text-[10px] mt-1">+10%</h3>
                  <img src={arrowrise} alt="" className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
            {/* Add more boxes here as required */}
          </div>

          <div className="mt-10">
            <div className="lg:flex md:grid-cols-4 grid grid-cols-1 gap-2 text-center">
              <button
                onClick={() => handleOverlay('NewNotifications')}
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Send Notifications
              </button>
              <Link
                to="/Allsales"
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Manage Sales
              </Link>
              <button
                onClick={() => handleOverlay('DisableUser')}
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Disable User
              </button>
              <Link
                to="/dashboard"
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/Theme"
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Update Theme
              </Link>
              <Link
                to="/Brandstyles"
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Update brand style
              </Link>
              <Link
                to="/Resetpassword"
                className="w-[150px] h-[30px] border-2 border-[#3C60FFB2] rounded-md"
              >
                Reset password
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Section */}
      {showOverlay && (
        <div
          className="absolute inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30 cursor-pointer"  onDoubleClick={closeOverlay} // Added dim effect to the background
          onClose={closeOverlay}
        >
          <div
            
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the overlay
          >
            {overlayComponent}
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Usersdetails;

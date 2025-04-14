import React from 'react';
import noticon from '../../Cacrassets/notificationtwo.png';
import profileimage from '../../Cacrassets/Userone.png';

const Admin = () => {
  return (
    <div className=" lg:w-[1150px] md:w-[790px] w-[320px] ">
      {/* Header Section */}
      <div className="bg-[#f8f7f7] flex justify-between items-center py-5 px-5">
        {/* Greeting Text */}
        <h3 className="text-lg font-semibold">Hi, Admin! </h3>

        {/* Icons */}
        <div className="flex items-center lg:space-x-4 md:space-x-4 space-x-2">
          <img src={noticon} alt="Notification" className="w-[30px] h-[30px]" />
          <img src={profileimage} alt="Profile" className="w-[40px] h-[40px] rounded-full" />
        </div>
      </div>

      {/* Divider */}
      <hr className="bg-gray-500 h-[2px] " />
    </div>
  );
};

export default Admin;
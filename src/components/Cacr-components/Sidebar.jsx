import React, { useState } from 'react';
import logo from '../../assets/Cacr-icon.png';
import dashboardicon from '../../Cacrassets/Dashboard.png';
import all_usericon from '../../Cacrassets/All_user.png';
import settingsicon from '../../Cacrassets/Settings.png';
import Supporticon from '../../Cacrassets/Support.png';
import SalesIcon from '../../Cacrassets/Manage _Sales.png';
import Notificationicon from '../../Cacrassets/Notifications.png';
import { NavLink } from 'react-router-dom';
import Logout from '../../Cacrassets/Logout.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to track if sidebar is open or closed
  const navigate = useNavigate();
  const handleClick = () => {
    if(window.innerWidth < 1024){
      setIsOpen(!isOpen); 
    }
  };
  const handleDashboard=()=>{
    navigate("/dashboard")
  }
  const handleMessages=()=>{
    navigate("/Allmessages")
  }
  const handleNotifications=()=>{
    navigate("/Allnotifications")
  }
  const handleSales=()=>{
    navigate("/Allsales")
  }
  const handleSettings=()=>{
    navigate("/Settings")
  }
  const handleUsers=()=>{
    navigate("/Allusers")
  }
  const handleLogout=()=>{
    navigate("/login")
  }


  return (
    <div 
      onClick={handleClick} // Toggle sidebar on double-click
      className={`fixed z-10 top-0 left-0 min-h-screen py-10 bg-white transition-all duration-300 ease-in-out 
        ${isOpen ? 'fixed' : 'translate-x-0'} 
        md:${isOpen ? 'fixed' : 'translate-x-0'} 
         lg:translate-x-0`}
    >
      <div className="flex justify-center pb-16">
        <img src={logo} alt="" className="w-[60px] h-[60px]" />
      </div>

      <div className="lg:mx-5 md:mx-3 mx-3">
        <div className="flex lg:gap-5 md:gap-3 gap-3 py-3 cursor-pointer" onClick={handleDashboard}>
          <img src={dashboardicon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/dashboard" className={({ isActive})=> `w-[125px] ${isActive ? "text-blue-500" : "text-black"}`}>Dashboard</NavLink>}
        </div>

        <div className="flex lg:gap-5 md:gap-3 gap-3 py-3 cursor-pointer" onClick={handleUsers}>
          <img src={all_usericon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Allusers" className={({ isActive})=> `w-[125px] ${isActive ? "text-blue-500" : "text-black"}`}>All Users</NavLink>}
        </div>

        <div className="flex lg:gap-5 md:gap-3 gap-3 py-3 cursor-pointer" onClick={handleSales}>
          <img src={SalesIcon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Allsales" className={({ isActive})=> `w-[125px] ${isActive ? "text-blue-500" : "text-black"}`}>Manage Sales</NavLink>}
        </div>

        <div className="flex lg:gap-5 md:gap-3 gap-3 py-3 cursor-pointer"  onClick={handleMessages}>
          <img src={Supporticon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Allmessages"  className={({ isActive})=> `w-[125px] ${isActive ? "text-blue-500" : "text-black"}`}>Support</NavLink>}
        </div>

        <div className="flex lg:gap-5 md:gap-3 gap-3 py-3 cursor-pointer" onClick={handleNotifications}>
          <img src={Notificationicon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Allnotifications" className={({ isActive})=> `w-[125px] ${isActive ? "text-blue-500" : "text-black"}`}>Notification</NavLink>}
        </div>

        <div className="flex lg:gap-5 md:gap-3 gap-3 py-3 cursor-pointer" onClick={handleSettings}>
          <img src={settingsicon} alt="" className="w-[25px] h-[25px]" />
          {isOpen && <NavLink to="/Settings" className={({ isActive})=> `w-[125px] ${isActive ? "text-blue-500" : "text-black"}`}>Settings</NavLink>}
        </div>
      </div>

      <div>
        <div className="flex lg:gap-5 md:gap-3 gap-3 lg:mt-[80px] md:mt-[150px]  mt-20 mx-5 cursor-pointer" onClick={handleLogout}>
          <img src={Logout} alt="" className="w-[20px] h-[20px]" />
          {isOpen && <Link to="/login" className="text-[red]">Logout</Link>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

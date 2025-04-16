import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Cacr-components/Sidebar';
import Admin from '../../components/Cacr-components/Admin';
import Dashboard from '../../components/dashboard component/dashboard';
import UsersData from '../Users'

const  Allsales = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full  bg-[#f8f7f7]  relative lg:left-[200px]  md:left-[70px] left-[65px] ">
        <Admin />
       
        <Dashboard />
   
      </div>
    </div>
  );
};

export default Allsales;

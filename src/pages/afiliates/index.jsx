import React, {useState,useEffect} from 'react'
import Sidebar from '../../components/Cacr-components/Sidebar';
import Admin from '../../components/Cacr-components/Admin';
import threedot from '../../Cacrassets/ThreeDots.png';
import userIcon from '../../Cacrassets/Kunle.png';
import { Link } from 'react-router-dom';
import Userstwo from '../Usertwo';

const Affiliates = () => {
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      setUsers(Userstwo);
    }, []);
  

  return (

    <div className="flex bg-[#f8f7f7] min-h-screen">
  <Sidebar />

  <div className="flex-1 relative lg:left-[200px] md:left-20 left-20 overflow-hidden">
    <Admin />

    <div className="gap-5 items-center ml-10 mt-10">
      <h3 className="font-bold py-2">Affiliates</h3>
      <div className="flex gap-2">
        <Link
          to="/Allusers"
          className="border-blue-300 rounded-md border-2 lg:w-[150px] md:w-[150px] w-[75px] h-[40px] py-2 text-center font-semibold"
        >
          All-users
        </Link>
        <Link
          to="/Standalones"
          className="border-blue-300 rounded-md pl-4 border-2 lg:w-[650px] md:w-[390px] w-[120px] h-[40px] py-2 font-semibold"
        >
          Stand-Alone
        </Link>
        <div className="bg-[#eeecec] w-[40px] h-[40px] rounded-md flex items-center justify-center">
          <img src={threedot} alt="Options" />
        </div>
      </div>
    </div>

    {/* Scrollable table wrapper */}
    <div className="overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden px-4">

        {/* Table Header */}
        <div className="grid grid-cols-6 md:gap-10 lg:gap-10 gap-2 py-3 lg:w-[1150px] md:w-[1200px] w-[900px] px-5 rounded-md text-[grey] font-semibold">
          <h3 className="text-left">Name</h3>
          <h3 className="text-left l">Email address</h3>
          <h3 className="text-left ">Phone number</h3>
          <h3 className="text-left">Date Joined</h3>
          <h3 className="text-left ">Actions</h3>
        </div>

        {/* User Rows */}
        {users.map((user, index) => (
          <div
            key={index}
           className="grid grid-cols-6 items-center md:gap-10 lg:gap-10 gap-2 lg:w-[1150px] md:w-[1200px] w-[900px] rounded-s-2xl bg-[#fdfdfd] my-1 px-5 py-3"
          >
            <div className="flex items-center gap-2">
              <img src={userIcon} alt="User" className="w-[30px] h-[30px]" />
              <h3>{user.name}</h3>
            </div>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.dateJoined}</h3>
            <Link to="/Affiliateuserdetails" className="text-blue-600">
              View User
            </Link>
          </div>
        ))}
      </div>
   
  </div>
</div>

  );
};

export default Affiliates;
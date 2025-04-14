import React, { useState } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import { useNavigate } from 'react-router-dom';
import ng from "../Cacrassets/ng 1.png";
import whitespace from '../Cacrassets/image 1.png';
import upload from "../Cacrassets/uploadicon.png";
import deleteIcon from '../Cacrassets/uplload.png';
import Action from '../components/Cacr-components/Action';  // Import the Action component

const Settings = () => {
  const navigate = useNavigate();


  // Form state management
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountrycode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  // State for showing the Action overlay
  const [showAction, setShowAction] = useState(false);

  const handleAccount = () => {
    navigate("/Settings");
  };
  
  const handleCms = () => {
    navigate("/Cms");
  };
  
  const handleSecurity = () => {
    navigate("/Security");
  };

  const handleUpdate = () => {
    setShowAction(true); // Trigger showing Action overlay when "Update" is clicked
  };
  const closeOverlay = () => {
    setShowAction(false); // Trigger showing Action overlay when "Update" is clicked
  };

  return (
    <div className="flex  bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-[70px] left-[70px]  ">
        <Admin />
        <div className="my-10 lg:ml-10 md:ml-10 ml-5 mr-8 bg-white p-10 lg:w-[950px] md:w-[950px] w-screen  min-h-screen">
          {/* Header */}
          <div className="flex lg:gap-5 md:gap-5 gap-1 items-center">
            <button 
              onClick={handleAccount} 
              className={`text-gray-400 hover:text-black border-b-4 lg:w-[150px] md:w-[150px] w-[70px] border-blue-400 font-semibold'  `}
            >
              Account
            </button>
            <button onClick={handleCms} className='text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[70px]'>CMS</button>
            <button onClick={handleSecurity} className='text-gray-400 hover:text-black lg:w-[150px] md:w-[150px] w-[70px]'>Security</button>
          </div>

          <div className=' lg:flex md:flex grid justify-between mt-10'>
            <h3 className='font-semibold'>Account Settings</h3>
            <button 
              className='w-[180px] h-[59px] my-2  rounded-md bg-[#3C60FF] text-white mr-10' 
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>

          <div className='flex gap-10'>
            {/* Left Form Fields */}
            <div>
              <div className='py-5'>
                {/* First Name */}
                <div className='py-2'>
                  <h3 className='py-2'>First Name</h3>
                  <div className="flex gap-5 lg:w-[375px] md:w-[375px] w-[225px] h-[52px] bg-[#EFF1F999] p-3">
                    <input 
                      type="text" 
                      value={firstName} 
                      className='outline-none bg-[#EFF1F999] px-3' 
                      placeholder='Super' 
                      onChange={(e) => setFirstname(e.target.value)} 
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className='py-2'>
                  <h3 className='py-2'>Last Name</h3>
                  <div className="flex gap-5 lg:w-[375px] md:w-[375px] w-[225px] h-[52px] bg-[#EFF1F999] p-3">
                    <input 
                      type="text" 
                      value={lastName} 
                      className='outline-none bg-[#EFF1F999] px-3' 
                      placeholder='Admin' 
                      onChange={(e) => setLastname(e.target.value)} 
                    />
                  </div>
                </div>

                {/* Email */}
                <div className='py-2'>
                  <h3 className='py-2'>Email</h3>
                  <div className="flex gap-5 lg:w-[375px] md:w-[375px] w-[225px] h-[52px] bg-[#EFF1F999] p-3">
                    <input 
                      type="email" 
                      value={email} 
                      className='outline-none bg-[#EFF1F999] px-3' 
                      placeholder='Superadmin@gmail.com' 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div >
                  <h3>Phone Number</h3>
                  <div className='lg:flex md:flex grid gap-3 my-2'>
                    <div className='w-[142px] h-[52px] bg-[#EFF1F999] flex gap-2 p-2'>
                      <img src={ng} alt="" className='w-[35px] h-[35px]' />
                      <select 
                        className='outline-none text-[#ABAFB1] bg-[#EFF1F999]' 
                        value={countryCode} 
                        onChange={(e) => setCountrycode(e.target.value)}
                      >
                        <option value="+234">+234</option>
                        <option value="+249">+249</option>
                        <option value="+342">+342</option>
                      </select>
                    </div>
                    <input 
                      className='w-[227px] h-[52px] bg-[#EFF1F999] outline-none px-3' 
                      placeholder='07023253554' 
                      value={number} 
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* City */}
                <div className='py-2'>
                  <h3 className='py-2'>City</h3>
                  <div className="flex gap-5 lg:w-[375px] md:w-[375px] w-[225px] h-[52px] bg-[#EFF1F999] p-3">
                    <input 
                      type="text" 
                      value={city} 
                      className='outline-none bg-[#EFF1F999] px-3' 
                      placeholder='Address' 
                      onChange={(e) => setCity(e.target.value)} 
                    />
                  </div>
                </div>

                {/* Country and State */}
                <div className='lg:flex  md:flex gridgap-3'>
                  <div>
                    <h3>Country</h3>
                    <div className='w-[142px] h-[52px] bg-[#EFF1F999] p-2 my-2'>
                      <select 
                        className='outline-none text-[#ABAFB1] bg-[#EFF1F999]' 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value="">Select Country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <h3>State</h3>
                    <div className='w-[142px] h-[52px] bg-[#EFF1F999] p-2 mt-2'>
                      <select 
                        className='outline-none text-[black] bg-[#EFF1F999]' 
                        value={state} 
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="Lagos">Lagos</option>
                        <option value="Ibadan">Ibadan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className='relative w-[172px] h-[167px] rounded-md'>
              <img src={whitespace} className='w-full h-full rounded-md' alt="" />
              <div className='absolute top-2 right-2 flex space-x-2'>
                <img src={upload} alt="Upload" className='w-[25px] h-[25px] cursor-pointer' />
                <img src={deleteIcon} alt="Delete" className='w-[30px] h-[30px] cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the Action component */}
      <div className='cursor-pointer' onDoubleClick={closeOverlay}>
      {showAction && <Action action = "Updated your account" />}
      </div>
    </div>
  );
};

export default Settings;

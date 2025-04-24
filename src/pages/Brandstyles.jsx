import React, { useState } from 'react';
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import { useNavigate } from 'react-router-dom';
import whitespace from '../Cacrassets/image 1.png';

const Brandstyles = () => {
  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [font, setFont] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [logo, setLogo] = useState(null);

  const handleUpdate = () => {
    // console.log({
    //   businessName,
    //   lastName,
    //   email,
    //   address,
    //   website,
    //   font,
    //   phone,
    //   plan,
    //   logo,
    // });
  };

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-[65px] left-[62px] ">
        <Admin />
        <div className="ml-10 mr-8 bg-[#ffffff] p-10 w-full min-h-screen m-10">
          {/* Header */}
          <div className="flex gap-5 items-center">
            <button onClick={() => navigate('/Settings')} className='text-gray-400 hover:text-black w-[150px]'>Account</button>
            <button onClick={() => navigate('/Cms')} className='text-gray-400 hover:text-black border-b-4 w-[150px] border-blue-400 font-semibold'>CMS</button>
            <button onClick={() => navigate('/Security')} className='text-gray-400 hover:text-black w-[150px]'>Security</button>
          </div>
          <div className='lg:flex md:grid grid bg-[#fafafa] p-10 m-10 gap-10'>
            <div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px] h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Business Name</h3>
                <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className='px-4 outline-none'/>
              </div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px]  h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Last Name</h3>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='px-4 outline-none'/>
              </div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px] h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Address</h3>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='px-4 outline-none'/>
              </div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px]  h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Website Address</h3>
                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className='px-4 outline-none'/>
              </div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px] h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Current Font</h3>
                <input type="text" value={font} onChange={(e) => setFont(e.target.value)} className='outline-none' placeholder='Nutrito'/>
              </div>
            </div>
            <div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px] h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Phone Number</h3>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='outline-none' placeholder='+234 000-000-0000'/>
              </div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px]  h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Current Plan</h3>
                <input type="text" value={plan} onChange={(e) => setPlan(e.target.value)} className=' outline-none' placeholder='Affiliate'/>
              </div>
              <div className='input-group lg:w-[455.36px] md:w-[455.36px] w-[150px] h-[91px] bg-[white] my-5 rounded-2xl p-5'>
                <h3 className='text-gray-400'>Email</h3>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none rounded-md'/>
              </div>
              
              <div className='w-[455.36px] h-[201px] bg-[#FEFEFE] my-5 rounded-2xl p-5'>  
                    <h3 className='text-gray-400'>Logo</h3>
                   <div className='flex gap-3 my-5'>
                   <img src={whitespace} alt="" className='w-[80px] h-[80px] rounded-3xl' />
                    <h3 className='text-gray-500'>Change Logo(Upload from device) <input type="file" onChange={(e) => setLogo(e.target.files[0])} className='outline-none' /></h3> 
                   </div>
               </div>
               
            </div>
            <div className='mt-12 ml-[150px]'>
                <button onClick={handleUpdate} className='w-[180px] h-[51px] rounded-2xl bg-[#3C60FF] text-white mr-10'>Update</button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Brandstyles;
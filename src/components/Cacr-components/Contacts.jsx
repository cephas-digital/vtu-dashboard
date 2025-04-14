import React from 'react'
import janet from '../../Cacrassets/Rectangle 3.png';
import jane from '../../Cacrassets/whatsapp_user.png';
import Kunle from '../../Cacrassets/Group 12 (1).png';


const Contacts = () => {
  return (
    <div className='w-[300px] min-h-screen'>
       <div className='bg-white p-5 w-[300px] h-[100px]'>
            <h3 className='font-bold'>Contacts</h3>
            <div className="w-[270px] h-[40px] rounded-md px-3 flex gap-2 border-2 border-[grey] ">
              <div className=' mt-2'>
              <ion-icon name="search-outline"  ></ion-icon> 
              </div>
            <input type="text" placeholder='Search' className='outline-none' />
              </div>
        </div>
       
        <div>
        <div className = "flex gap-5 bg-white my-3">
            <img src={janet} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Jane Doe</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        <div className = "flex gap-5 bg-white my-3">
            <img src={jane} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Janet Adeboye</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        <div className = "flex gap-5 bg-white">
            <img src={Kunle} alt=""  className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Kunle Adekunle</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        </div>
        <div>
        <div className = "flex gap-5 bg-white my-3">
            <img src={janet} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Jane Doe</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        <div className = "flex gap-5 bg-white my-3">
            <img src={jane} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Janet Adeboye</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        <div className = "flex gap-5 bg-white">
            <img src={Kunle} alt=""  className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Kunle Adekunle</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        </div>
        <div>
        <div className = "flex gap-5 bg-white my-3">
            <img src={janet} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Jane Doe</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        <div className = "flex gap-5 bg-white my-3">
            <img src={jane} alt="" className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Janet Adeboye</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        <div className = "flex gap-5 bg-white">
            <img src={Kunle} alt=""  className='w-[50px] h-[50px]' />
            <div>
                <h3 className='font-semibold pb-2'>Kunle Adekunle</h3>
                <h3>Hi,i want to make enquiries</h3>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Contacts

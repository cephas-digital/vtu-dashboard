import React from 'react'
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import ChatInterface from '../components/Chatbotcomponent/Chatinterface';





const  Chatbot = () => {
  


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] bg-gray-100 left-[320px] md:left-[170px]">
        <Admin />
        <div className="my-5 ml-10 ">
            <div className='lg:flexmd:glex grid gap-2 justify-between my-10  lg:w-[1000px] md:w-[600px]   '>
                <h3>Conversations with Customers</h3>
                <button className='rounded-2xl bg-[#3C60FF] w-[150px] h-[30px] text-white '>New Message</button>
            </div>
          
          <ChatInterface/>
 


         </div>

       
      </div>
    </div>
  );
};

export default Chatbot;
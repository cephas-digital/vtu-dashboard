import React from 'react'
import Sidebar from '../components/Cacr-components/Sidebar';
import Admin from '../components/Cacr-components/Admin';
import ChatInterface from '../components/Chatbotcomponent/Chatinterface';





const  Chatbot = () => {
  


  return (
    <div className="flex bg-[#f8f7f7] min-h-screen">
      <Sidebar />
      <div className="w-full relative left-20">
        <Admin />
        <div className="my-5 ml-10 mr-8">
            <div className='flex justify-between my-10'>
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
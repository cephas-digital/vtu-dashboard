import React, { useState } from 'react';
import closeIcon from '../Cacrassets/closeIcon.png';
import Action from '../../src/components/Cacr-components/Action';   // Adjust this path if needed

const Newnotifications = ({onClose }) => {
  
  const [messageTitle, setMessageTitle] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [showAction, setShowAction] = useState(false);

  const handleAdd = () => {
     if(messageTitle !== "" || recipient !== "" || message !== "" ){
      console.log('Notification Added:', { messageTitle, recipient, message });
      setShowAction(true);  // Trigger the overlay
     }
     else{
      alert("fill out all details")
      setShowAction(false)
     }
  };

  



  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30  z-50 flex justify-center  items-center">
      <div className="bg-white lg:w-[450px] md:w-[450px] w-[300px] h-[550px] rounded-md p-10">
        <div className="flex justify-between">
          <h3 className="font-bold lg:text-2xl md:text-2xl text-xl">New Notification</h3>
          <img
            src={closeIcon}
            onClick={onClose}
            className="w-[32px] h-[32px] cursor-pointer"
            alt="Close"
          />
        </div>

        <div className="mt-10">
          <div>
            <h3 className="my-3 text-gray-500">Message Title</h3>
            <input
              type="text"
              placeholder="Title"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              className="lg:w-[375px] md:w-[375px] w-[250px] h-[52px] p-5 outline-none bg-[#EFF1F999] rounded-md"
            />
          </div>
          <div>
            <h3 className="my-3 text-gray-500">Recipients</h3>
            <select
              name="recipients"
              id="recipients"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="lg:w-[375px] md:w-[375px] w-[250px]  h-[52px] px-5 bg-[#EFF1F999] rounded-md"
            >
              <option value="">Select Recipient</option>
              <option value="Natasha Jones">Natasha Jones</option>
              <option value="James Adeyemi">James Adeyemi</option>
            </select>
          </div>
          <div className="my-3">
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="outline-none rounded-md lg:w-[375px] md:w-[375px] w-[250px]  h-[120px] p-3 bg-[#EFF1F999]"
            ></textarea>
          </div>

          <div className="flex gap-2 mt-5">
            <button
              className="w-[180px] h-[44px] rounded-2xl font-semibold text-[#3C60FF] bg-white border-[#3C60FF] border-[3px]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="w-[180px] h-[44px] rounded-2xl font-semibold text-white bg-[#3C60FF]"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {showAction && <Action action = 'sent a new notfication' onClose={() => setShowAction(false)} />}
    </div>
  );
};

export default Newnotifications;

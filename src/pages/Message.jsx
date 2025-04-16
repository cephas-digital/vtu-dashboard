import React, { useState } from "react";
import closeIcon from "../Cacrassets/closeIcon.png";

const Message = ({ closeOverlay, showAction }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message) {
      alert("kindly fill in your message");
    } else {
      showAction(); // Trigger Action overlay
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white lg:w-[450px] md:w-[450px] w-[300px] lg:h-[550px] md:h-[550px] h-[450px] rounded-md p-10 relative">
        <div className="flex justify-between">
          <h3 className="font-bold pt-2">Natasha Jones</h3>
          <img
            src={closeIcon}
            onClick={closeOverlay}
            className="w-[32px] h-[32px] cursor-pointer"
            alt="Close"
          />
        </div>

        <div className="my-3">
          <textarea
            placeholder="Message"
            className="outline-none rounded-md lg:w-[370px] md:w-[370px] w-[240px] h-[242px] p-3 bg-[#EFF1F999]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            className="w-[180px] h-[44px] rounded-2xl font-semibold text-[#3C60FF] bg-white border-[#3C60FF] border-[3px]"
            onClick={closeOverlay}
          >
            Cancel
          </button>
          <button
            className="w-[180px] h-[44px] rounded-2xl font-semibold text-white bg-[#3C60FF]"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}; 


export default Message;

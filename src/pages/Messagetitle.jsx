

import React, { useState, useEffect } from "react";
import closeIcon from "../Cacrassets/closeIcon.png";
import userimg from "../Cacrassets/Userone.png";

const Messagetitle = ({ closeOverlay, openReply }) => {
  const [currentDatetime, setCurrentDatetime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDatetime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] lg:h-[600px] md:h-[750px] h-[720px] rounded-md p-10 relative">
        <img
          src={closeIcon}
          onClick={closeOverlay}
          className="w-[32px] h-[32px] cursor-pointer absolute top-4 right-4"
          alt="Close"
        />
        <div className="lg:my-0 md:my-5 my-0">
          <h3 className="font-bold text-2xl">Message Title</h3>
        </div>
        <h3 className="lg:py-2 md:py-3 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum,
          enim nesciunt dolor numquam necessit.
        </h3>
        <h3 className="lg:py-2 md:py-5 py-0">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit
          minus suscipit, maiores, consequatur tempore eveniet optio sit, iure
          possimus iusto aliquid? Rerum et ad sint officiis. Odio, modi
          nesciunt?
        </h3>
        <h3 className="lg:py-2 md:py-5 py-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit
          minus suscipit, maiores, consequatur tempore eveniet optio sit, iure
          possimus iusto aliquid? Rerum et ad sint officiis. Odio, modi
          nesciunt? numquam necessit.
        </h3>
        <h3 id="date-time" className="font-semibold">
          {currentDatetime.toLocaleString()}
        </h3>

        {/* Sender Details */}
        <div className="lg:my-5 md:my-5 my-1">
          <h3 className="font-bold">Sender Details</h3>
          <div className="flex gap-3">
            <div>
              <img src={userimg} alt="User" />
            </div>
            <div>
              <h3 className="font-bold py-1">Natasha Jones</h3>
              <h3 className="py-1">natashajones34@gmail.com</h3>
              <h3 className="py-2">+234 701222 3333</h3>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[180px] h-[44px] rounded-2xl font-semibold text-white bg-[#3C60FF] my-5"
              onClick={openReply} // Change overlay on click
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messagetitle;

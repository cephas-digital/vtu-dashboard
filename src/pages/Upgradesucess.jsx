import React, { useState, useEffect } from 'react';
import closeIcon from '../Cacrassets/closeIcon.png';
import userimg from '../Cacrassets/Natasha.png';




const Upgradesucess = ({onClose}) => {

  const [currentDatetime, setCurrentDatetime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDatetime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[500px] lg:h-[600px] md:h-[600px] h-[650px] rounded-md p-10 relative">
        <img src={closeIcon} onClick={onClose} className="w-[32px] h-[32px] cursor-pointer absolute top-5 right-5" alt="Close" />
        <h3 className="font-bold text-2xl my-5">Upgrade Success</h3>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum, enim nesciunt dolor numquam necessit.</p>
        <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit minus suscipit, maiores, consequatur tempore eveniet optio sit, iure possimus iusto aliquid? Rerum et ad sint officiis. Odio, modi nesciunt?</p>
        <h3 className="font-semibold">{currentDatetime.toLocaleString()}</h3>

        {/* Sender Details */}
        <div className="my-5 lg:mt-10 md:mt-10 mt-2">
          <h3 className="font-bold">Sender Details</h3>
          <div className="flex gap-5">
            <img src={userimg} alt="User" className= "w-[40px] h-[40px] my-3" />
            <div>
              <h3 className="font-bold py-1">Natasha Jones</h3>
              <h3 className="py-1">natashajones34@gmail.com</h3>
              <h3 className="py-2">+234 701222 3333</h3>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-[180px] h-[44px] rounded-2xl font-semibold text-white bg-[#3C60FF] my-5" onClick={onClose}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgradesucess;

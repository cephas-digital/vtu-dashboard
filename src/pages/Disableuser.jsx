import React, { useState } from 'react';
import closeIcon from '../Cacrassets/closeIcon.png';
import { useNavigate } from 'react-router-dom';
import Action from '../../src/components/Cacr-components/Action';  // Adjust this path if needed

const Disableuser = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [showAction, setShowAction] = useState(false);

  const handleClose = () => {
    console.log('Modal closed');
    navigate("/Allusers");
  };

  const handleProceed = () => {
    if (!reason.trim()) {
      alert('Please provide a reason.');
      return;
    }

    console.log('Disabling user with reason:', reason);
    setShowAction(true); // Trigger the overlay
  };

 

  return (
    <div className="flex justify-center p-10 min-h-screen ">
      <div className="bg-white lg:w-[450px] md:w-[450px] w-[300px]  lg:h-[550px] md:h-[550px] h-[450px] rounded-md p-10">
        <div className="flex justify-between">
          <h3 className="font-bold pt-2">Why do you want to disable user</h3>
          <img
            src={closeIcon}
            onClick={handleClose}
            className="w-[32px] h-[32px] cursor-pointer"
            alt="Close"
          />
        </div>

        <div className="my-3">
          <textarea
            placeholder="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="outline-none rounded-md lg:w-[370px] md:w-[370px] w-[230px] h-[242px] p-3 bg-[#EFF1F999]"
          />
        </div>

        <div className="flex gap-2 mt-5">
          <button
            className="w-[180px] h-[44px] rounded-2xl font-semibold text-[#3C60FF] bg-white border-[#3C60FF] border-[3px]"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="w-[180px] h-[44px] rounded-2xl font-semibold text-white bg-[#3C60FF]"
            onClick={handleProceed}
          >
            Proceed
          </button>
        </div>
      </div>

      {showAction && <Action onClose={() => setShowAction(false)} action = "disable a user" />}
    </div>
  );
};

export default Disableuser;


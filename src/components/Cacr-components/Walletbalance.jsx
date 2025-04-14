import React, { useState } from 'react';
import SaveIcon from '../../Cacrassets/save.png'

const Walletbalance = () => {
  const [showbalance, setShowbalance] = useState(false);

  return (
    <div className='my-16'>
      <div className='mb-10'>
        <h3 className='font-bold'>Wallet Balance</h3>
      </div>
      <div className='bg-gradient-to-t from-[#31418B] to-[#5570F1] text-white p-5 lg:w-[600px]  w-[223px] md:w-[600px] lg:h-[300px] md:h-[300px] h-[200px] rounded-md my-5'>
        <img src={SaveIcon} alt="Save Icon" className="w-10 h-10" />
        <div className='flex gap-5 lg:mt-[70px] md:mt-[70px] mt-[20px] items-center'>
          <h3 className='lg:text-[35px] md:text-[35px] text-20px  font-bold'>
            {showbalance ? ' **********' : 'NGN 300,000,000.00'}
          </h3>
          <h3 className='mt-2 cursor-pointer' onClick={() => setShowbalance(!showbalance)}>
            <ion-icon name={showbalance ? "eye-outline" : "eye-off-outline"}></ion-icon>
          </h3>
        </div>

        <div className='grid grid-cols-2 lg:my-12  gap-2 md:my-12 my-5'>
          <div>
            <h3>All products</h3>
            <div className='flex gap-2'>
              <h3 className="font-bold">5</h3>
              <h3>+0.0%</h3>
            </div>
          </div>
          <div>
            <h3>Active</h3>
            <div className='flex gap-2'>
              <h3 className="font-bold">0</h3>
              <h3>+0.0%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walletbalance;
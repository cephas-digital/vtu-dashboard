  import React from 'react';
  import star from '../../Cacrassets/notificationtwo.png'

  const Action = ({action}) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-black lg:w-[350px] md:w-[350px] w-[250px] lg:h-[350px] md:h-[350px] h-[250px] shadow-2xl bg-white rounded-md flex flex-col items-center justify-center p-10">
        <div className="bg-white w-[150px] h-[150px] flex items-center justify-center">
          <img src={star} alt="notification" />
        </div>
        <div className="text-center mt-4">
          <h3 className="font-bold text-lg">Action Completed</h3>
          <h3>You have successfully {action}</h3>
        </div>
      </div>
    </div>
  );
};


  export default Action

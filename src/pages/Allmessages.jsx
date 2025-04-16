import React, { useEffect, useState } from "react";
import Sidebar from "../components/Cacr-components/Sidebar";
import Admin from "../components/Cacr-components/Admin";
import userIcon from "../Cacrassets/usertwo.png";
import UsersData from "./Users";
import Messagetitle from "./Messagetitle";
import Message from "./Message";
import Action from "../../src/components/Cacr-components/Action"; // <-- import Action component

const Allmessages = () => {
  const [users, setUsers] = useState([]);
  const [overlay, setOverlay] = useState(null); // 'title', 'message', 'action'

  useEffect(() => {
    setUsers(UsersData);
  }, []);

  const handleAttend = () => {
    setOverlay("title");
  };

  const handleReply = () => {
    setOverlay("message");
  };

  const handleShowAction = () => {
    setOverlay("action");
  };

  const closeOverlay = () => {
    setOverlay(null);
  };

  return (
    <div className="flex bg-[#f8f7f7] min-h-screen relative transition-all">
      <Sidebar />
      <div className="w-full relative lg:left-[200px] md:left-[69px] left-[69px]">
        <Admin />
        <div className="my-10 ml-10 mr-8">
          <h3 className="font-bold py-2">All Messages</h3>
        </div>
        <div className="overflow-auto md:overflow-auto lg:overflow-hidden whitespace-nowrap mx-5">
        
          <div className="grid grid-cols-6 py-3 lg:w-[1050px] md:w-[1200px] w-[1050px] px-5 rounded-md text-[grey] font-semibold">
            <h3 className="text-left">Sender</h3>
            <h3 className="text-left">Type</h3>
            <h3 className="text-left">Message Title</h3>
            <h3 className="text-left">Sender Email address</h3>
            <h3 className="text-left ">Date Sent</h3>
            <h3 className="text-left ">Actions</h3>
          </div>

          {users.map((user, index) => (
            <div key={index} className="grid grid-cols-6 lg:w-[1050px] md:w-[1200px] w-[1050px]  items-center rounded-s-2xl bg-[#fdfdfd] my-1 px-5 py-3">
              <div className="flex items-center gap-2">
                <img src={userIcon} alt="User" className="w-[20px] h-[20px]" />
                <h3>{user.name}</h3>
              </div>
              <h3>{user.Type}</h3>
              <h3>{user.Title}</h3>
              <h3>{user.email}</h3>
              <h3 >{user.dateJoined}</h3>
              <h3 onClick={handleAttend} className="text-[#3C60FF] cursor-pointer">Attend to message</h3>
            </div>
          ))}
        </div>
       
      </div>

      {/* Overlays */}
      <div className="cursor-pointer" onDoubleClick={closeOverlay}>
      {overlay === "title" && (
        <Messagetitle closeOverlay={closeOverlay} openReply={handleReply} />
      )}
      </div>
     <div className="cursor-pointer" onDoubleClick={closeOverlay}>
     {overlay === "message" && (
        <Message closeOverlay={closeOverlay} showAction={handleShowAction} />
      )}
     </div>
      <div className="cursor-pointer" onClick={closeOverlay}>
      {overlay === "action" && <Action action = "sent a message" />}
      </div>
    </div>
  );
};

export default Allmessages;

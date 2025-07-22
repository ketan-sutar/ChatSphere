// import React, { useEffect } from "react";
// import SendInput from "./SendInput";
// import Messages from "./Messages";
// import { useSelector, useDispatch } from "react-redux";
// import { setSelectedUser } from "../Redux/userSlice";

// const MessageContainer = () => {
//   const { selectedUser, authUser, onlineUsers } = useSelector(
//     (store) => store.user
//   );
//   const dispatch = useDispatch();

//   const isOnline = onlineUsers?.includes(selectedUser?._id);

//   return (
//     <>
//       {selectedUser !== null ? (
//         <div className="md:min-w-[550px] flex flex-col">
//           <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
//             <div className={`avatar ${isOnline ? "online" : ""}`}>
//               <div className="w-12 rounded-full">
//                 <img src={selectedUser?.profilePhoto} alt="user-profile" />
//               </div>
//             </div>
//             <div className="flex flex-col flex-1">
//               <div className="flex justify-between gap-2">
//                 <p>{selectedUser?.fullName}</p>
//               </div>
//             </div>
//           </div>
//           <Messages />
//           <SendInput />
//         </div>
//       ) : (
//         <div className="md:min-w-[550px] flex flex-col justify-center items-center">
//           <h1 className="text-4xl text-white font-bold">
//             Hi,{authUser?.fullName}{" "}
//           </h1>
//           <h1 className="text-2xl text-white">Let's start conversation</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default MessageContainer;

import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );

  const isOnline = onlineUsers?.includes(selectedUser?._id);

  if (!selectedUser) {
    return (
      <div className="md:min-w-[550px] flex flex-col justify-center items-center h-full bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">Hi, {authUser?.fullName}</h1>
        <h2 className="text-2xl mt-2">Let's start a conversation</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full bg-white">
      {/* Header */}
      <div className="px-4 py-2 bg-zinc-800 text-white flex items-center gap-3">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={selectedUser?.profilePhoto} alt="user-profile" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">{selectedUser?.fullName}</p>
          <span className="text-sm">{isOnline ? "Online" : "Offline"}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <Messages />
      </div>

      {/* Input */}
      <div className="p-4 bg-gray-700 text-white flex items-center gap-2">
        <SendInput />
      </div>
    </div>
  );
};

export default MessageContainer;

// import React from 'react';


// const Task = ({taskTicket}) => {
//     console.log("Task Component Received taskTicket:", taskTicket[0]); // Console log to check the received taskTicket
//     return (
//         <div>
//               {/* 2nd Part: Status/Sidebar Section (4 bhager moddhe 1 bhag nibe) */}
//             <div className="md:col-span-1 flex flex-col gap-6">
//                 <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
//                     <h3 className="font-bold mb-4 text-gray-800">Task Status</h3>
//                     {/* Sidebar content ekhane hobe */}
//                     <div className="text-sm text-gray-500 italic">
//                         Select a ticket to see status...
//                     </div>
//                 </div>
                
//                 {/* Resolved Task Section */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
//                     <h3 className="font-bold mb-4 text-gray-800">Resolved Task</h3>
//                     <p className="text-sm text-gray-400">No resolved tasks yet.</p>
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default Task;


import React from 'react';

const Task = ({ taskTicket=[] }) => {
    console.log("Task Component Received taskTicket:", taskTicket); // Console log to check the received taskTicket
  return (
    <div className="md:col-span-1 flex flex-col gap-6">

      {/* Task Status */}
      <div className="bg-white p-4 rounded-xl shadow-sm border h-fit">
        <h3 className="font-bold text-2xl mb-4 text-gray-800">Task Status</h3>

        {taskTicket.length === 0 ? (
          <div className="text-sm text-gray-500 italic">
            Select a ticket to see status...
          </div>
        ) : (
          taskTicket.map((ticket) => (
            <div>
                 <h3 key={ticket.id} className="text-lg font-bold text-gray-800">
              {ticket.title}
            </h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
           Complete
          </button>
            </div>
           
          ))
          
        )}
      </div>

      {/* Resolved Task */}
      <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
        <h3 className="font-bold mb-4 text-gray-800">Resolved Task</h3>
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      </div>

    </div>
  );
};

export default Task;




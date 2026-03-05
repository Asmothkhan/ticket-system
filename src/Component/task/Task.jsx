

import { toast } from "react-toastify";
const Task = ({ taskTicket=[], resolvedTask ,handleResolve}) => {
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
            <div  key={ticket.id}>
                 <h3 className="text-lg font-bold text-gray-800">
              {ticket.title}
            </h3>
            <button onClick={() => {handleResolve(ticket);
                toast.success("Task Completed ✅");
            }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
           Complete
          </button>
            </div>
           
          ))
          
        )}
      </div>

      {/* Resolved Task */}
      {/* <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
        <h3 className="font-bold mb-4 text-gray-800">Resolved Task</h3>
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      </div> */}


       <div className="bg-white p-6 rounded-xl shadow-sm border h-fit">
        <h3 className="font-bold mb-4 text-gray-800">Resolved Task</h3>

        {resolvedTask.length === 0 ? (
          <p className="text-sm text-gray-400">No resolved tasks yet.</p>
        ) : (
          resolvedTask.map((ticket) => (
            <p key={ticket.id} className="text-sm text-green-600">
              {ticket.title}
            </p>
          ))
        )}

      </div>

    </div>
  );
};

export default Task;




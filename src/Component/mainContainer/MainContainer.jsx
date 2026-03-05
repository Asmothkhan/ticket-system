import React, { use } from 'react';
import TicketCard from './TicketCard';
import Task from '../task/Task';

const MainContainer = ({ ticketsPromise, setTaskTicket, taskTicket }) => {

  const tickets = use(ticketsPromise);

  const handleTicketClick = (ticket) => {
    setTaskTicket([...taskTicket, ticket]);
     // Console log to check the clicked ticket
    // ((prev) => [...prev, ticket]);
  };

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gray-50">

      {/* Ticket Section */}
      <div className="md:col-span-3">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="flex flex-col gap-4">
            {tickets.slice(0,5).map((ticket) => (

              <TicketCard
                key={ticket.id}
                data={ticket}
                onClick={() => handleTicketClick(ticket)}
              />

            ))}
          </div>

          <div className="flex flex-col gap-4">
            {tickets.slice(5,10).map((ticket) => (

              <TicketCard
                key={ticket.id}
                data={ticket}
                onClick={() => handleTicketClick(ticket)}
              />

            ))}
          </div>

        </div>

      </div>

      <Task taskTicket={taskTicket}/>

    </div>

  );
};

export default MainContainer;
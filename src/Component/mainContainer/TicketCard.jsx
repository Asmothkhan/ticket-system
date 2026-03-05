import React from 'react';
import { Circle } from 'lucide-react';

const TicketCard = ({ data, onClick }) => {

 const { Progress, date, description, id, name, priority, title } = data;

 return (
  <div onClick={onClick} className="card bg-base-100 shadow-sm cursor-pointer">

    <div className="card-body">

      <div className="flex flex-row justify-between items-center">
        <h2 className="card-title mr-15">{title}</h2>

        <button className={`flex items-center gap-2 px-3 py-1 shadow-sm rounded-3xl font-bold
        ${Progress === 'OPEN'
        ? 'bg-green-300 text-green-600'
        : 'bg-yellow-200 text-yellow-400'}`}>
        
        <span><i className="fa-solid fa-circle"></i></span>
        {Progress}

        </button>
      </div>

      <p>{description}</p>

      <div className="flex justify-between items-center mt-4">

        <div className="flex gap-4">
          <p className='font-semibold text-slate-600'>#{id}</p>

          <h1 className={`font-semibold
          ${priority.toUpperCase() === 'HIGH PRIORITY'
          ? 'bg-green-100 text-red-600'
          : priority.toUpperCase() === 'MEDIUM PRIORITY'
          ? 'bg-yellow-100 text-yellow-600'
          : 'bg-blue-100 text-green-600'}`}>
          {priority}
          </h1>

        </div>

        <div className='flex gap-3 font-semibold text-slate-600'>
          <h2>{name}</h2>
          <p>{date}</p>
        </div>

      </div>

    </div>

  </div>
 );
};

// const TicketCard = ({data,onClick}) => {
//     const {Progress,date,description,id,name,priority,title}=data.data;
    
//     return (

//         <div onClick={onClick} className="card bg-base-100 shadow-sm cursor-pointer">
//   <div className="card-body">
//     <div className="flex flex-row justify-between items-center">
//         <h2 className="card-title mr-15">{title}</h2>
//         <button className={`flex items-center justify-between gap-2 px-3 py-1 shadow-sm rounded-3xl font-bold ${
//             Progress === 'OPEN' ? 'bg-green-300 text-green-600' : 'bg-yellow-200 text-yellow-400 text-slate-300 font-bold'
//         }`}> <span><i className="fa-solid fa-circle"></i></span>{Progress}</button>
//     </div>
//     <p>{description}</p>
//     <div className="flex flex-row justify-between items-center mt-4">
//      <div className="flex gap-4">
//         <p className='font-semibold text-slate-600'>#{id}</p>
//         <h1 className={`font-semibold ${priority.toUpperCase() === 'HIGH PRIORITY' 
//         ? 'bg-green-100 text-red-600' 
//         : priority.toUpperCase() === 'MEDIUM PRIORITY' 
//         ? 'bg-yellow-100 text-yellow-600' 
//         : 'bg-blue-100 text-green-600'}`}>{priority}</h1>
//      </div>
//      <div className='flex gap-3 font-semibold text-slate-600'>
//         <h2>{name}</h2>
//         <p>{date}</p>
//      </div>
//     </div>
//   </div>
// </div>
       
//     );
// };

export default TicketCard;




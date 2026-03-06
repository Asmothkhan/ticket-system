import React from 'react';
import './Banner.css'
import vector1 from '../../assets/vector1.png';
import vector2 from '../../assets/vector2.png';

const Banner = ({ taskTicket=[] , resolvedTask=[]}) => {
    return (
        <div className='flex flex-col md:flex-row text-center mt-5 gap-6 p-5 md:p-10 '>
            {/* First Card: In-Progress */}
            <div className='w-1/2 rounded-xl h-60 flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-500 relative overflow-hidden mb-5'>
                <div className='flex w-full h-full absolute top-0 left-0 opacity-50'>
                    <div className='box left w-1/2 h-full' style={{backgroundImage:`url(${vector1})`, backgroundSize: 'cover'}}></div>
                    <div className='box right w-1/2 h-full' style={{backgroundImage:`url(${vector2})`, backgroundSize: 'cover'}}></div>
                </div>
                <div className='grid '>
                    <span className="relative z-10 text-white font-bold text-2xl">In-Progress </span><span className='text-white font-bold text-4xl '>{taskTicket.length}</span>
                </div>
            </div>

            {/* Second Card: Resolved */}
            <div className='w-1/2 rounded-xl h-60 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-400 relative overflow-hidden'>
                <div className='flex w-full h-full absolute top-0 left-0 opacity-50'>
                    <div className='box left w-1/2 h-full' style={{backgroundImage:`url(${vector1})`, backgroundSize: 'cover'}}></div>
                    <div className='box right w-1/2 h-full' style={{backgroundImage:`url(${vector2})`, backgroundSize: 'cover'}}></div>
                </div>
                <div className='grid '>
                    <span className="relative z-10 text-white font-bold text-2xl">Resolved</span><span className='text-white font-bold text-4xl '>{resolvedTask.length}</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
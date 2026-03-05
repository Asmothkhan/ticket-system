import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
             <div className=' grid md:grid-cols-5 p-10'>
            <div>
                <h2 className='text-2xl font-semibold'>CS- Ticket System</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis architecto dolorum inventore culpa soluta sed aliquam minima laudantium possimus quaerat dolore ea veniam, voluptatem nulla enim! Magni, facere est.</p>
            </div>
            <div className='md:ml-20 mt-5'>
                <h3 className='font-semibold text-2xl  mb-4'>Company</h3>
                <ul>
                    <li className='mb-2'><a href="">About Us</a></li>
                    <li className='mb-2'><a href="">Our Mission</a></li>
                    <li><a href="">Contract Saled</a></li>
                </ul>
            </div>
            <div className='md:ml-20 mt-5'>
               <h3 className='font-semibold text-2xl  mb-4'>Service</h3>
                <ul>
                    <li className='mb-2'><a href="">Products & Service</a></li>
                    <li className='mb-2'><a href="">Customer Stories</a></li>
                    <li><a href="">Download Apps</a></li>
                </ul> 
            </div>
            <div className='md:ml-20 mt-5'>
                 <h3 className='font-semibold text-2xl  mb-4'>Information</h3>
                <ul>
                    <li className='mb-2'><a href="">Privecy Policy</a></li>
                    <li className='mb-2'><a href="">Terms & Condition</a></li>
                    <li><a href="">Join Us</a></li>
                </ul> 
            </div>
            <div className='mt-5'>
               <h3 className='font-semibold text-2xl  mb-4'>Social Links</h3>
                <ul>
                    <li className='mb-2'><a href="">@CS- Ticket System</a></li>
                    <li className='mb-2'><a href="">@CS- Ticket System</a></li>
                    <li><a href="">@CS- Ticket System</a></li>
                    <li><a href="">support@cst.com</a></li>
                </ul>  
            </div>
           
        </div>
        <hr className='mb-5 text-white '/>
        <h2 className='text-center p-6 tabs-xl '>&copy; 2026 CS- Ticket System. All rights reserved.</h2>
        </div>
       
       
    );
};

export default Footer;
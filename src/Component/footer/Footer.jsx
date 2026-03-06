import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
             <div className=' grid md:grid-cols-5 p-10'>
            <div>
                <h2 className='text-2xl font-semibold'>CS- Ticket System</h2>
                <p>If you experience any issues while using our platform, please submit a support ticket with detailed information. Our support team will review your request and respond promptly to help resolve the problem..</p>
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
                    <li className='mb-2'><a href=""><span className='x'><i class="fa-brands fa-x-twitter"></i></span> @CS- Ticket System</a></li>
                    <li className='mb-2'><a href=""><span><i class="fa-brands fa-facebook"></i></span> @CS- Ticket System</a></li>
                    <li><a href=""><span><i class="fa-brands fa-linkedin"></i></span> @CS- Ticket System</a></li>
                    <li><a href=""><span><i class="fa-solid fa-envelope"></i></span>  support@cst.com</a></li>
                </ul>  
            </div>
           
        </div>
        <hr className='mb-5 text-white '/>
        <h2 className='text-center p-6 tabs-xl '>&copy; 2026 CS- Ticket System. All rights reserved.</h2>
        </div>
       
       
    );
};

export default Footer;
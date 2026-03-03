import React from 'react';

const Navbar = () => {
    return (
//  <div className="navbar bg-base-100 shadow-sm text-blue-600 px-20 py-10 bg-slate-100">
  
 
//   <div>
    
   

//     <a >SwiftCart</a>
//   </div>


//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1 text-xl">
//       <li><a className="nav-btn">Home</a></li>
//       <li ><a className="nav-btn">Product</a></li>
//       <li><a className="nav-btn">About</a></li>
//       <li><a className="nav-btn">Contact</a></li>
//     </ul>
//   </div>

  
//   <div className="navbar-end">
//     <a className="btn text-2xl text-blue-400 font-bold">
//       <i className="fa-solid fa-cart-shopping"></i>
//     </a>

   
//     <div className="dropdown lg:hidden text-center justify-center px-4">
//       <div tabindex="0" role="button" className="btn btn-ghost">
//         <svg xmlns="http://www.w3.org/2000/svg" 
//           class="h-5 w-5" fill="none" viewBox="0 0 24 24" 
//           stroke="currentColor">
//           <path stroke-linecap="round" 
//           stroke-linejoin="round" 
//           stroke-width="2" 
//           d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>

//       <div tabindex="0" 
//           class="menu menu-sm dropdown-content 
//           bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  ">
//         <button id="home-container1"><a className="text-xl py-2 nav-btn ">Home</a></button>
//     <button  className="nav-btn text-xl py-2">Product</button>
//         <button><a className="nav-btn text-xl py-2">About</a></button>
//         <button><a className="nav-btn text-xl py-2">Contact</a></button>
//       </div>
//     </div>
//   </div>

// </div>

<div className="navbar bg-base-100 shadow-sm mx-auto text-center justify-center p-4">
  <div className="navbar-start">
    
    <a className="text-2xl font-bold">CS-Ticket System</a>
  </div>
  
  <div className="navbar-end">
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href="">Home</a></li>
    <li><a href="">FAQ</a></li>
    <li><a href="">Changelog</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Download</a></li>
    <li><a href="">Contract</a></li>
    </ul>
  </div>

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a href="">Home</a></li>
    <li><a href="">FAQ</a></li>
    <li><a href="">Changelog</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Download</a></li>
    <li><a href="">Contract</a></li>
      </ul>
    </div>
    
    <button className="btn  bg-gradient-to-bl from-violet-500 to-fuchsia-600 text-white
    p-4">+ New Ticket</button>
  </div>
</div>

    );
};

export default Navbar;
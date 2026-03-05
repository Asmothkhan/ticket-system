
import { Suspense } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner'
import MainContainer from './Component/mainContainer/MainContainer';
import Navbar from './Component/navbar/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Component/footer/Footer';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchTickets = async () => {
    const response = await fetch('public_ticket.json');
    
    return response.json();
};

function App() {
  const [taskTicket,setTaskTicket] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  const ticketsPromise = fetchTickets();
  
    
  return (
    <>
    <Navbar />
    <Banner resolvedTask={resolvedTask} taskTicket={taskTicket} />
   <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
      <MainContainer resolvedTask={resolvedTask} setResolvedTask={setResolvedTask} setTaskTicket={setTaskTicket} taskTicket={taskTicket} ticketsPromise={ticketsPromise} />
    </Suspense>

    <Footer/>
    <ToastContainer />  

    </>
  )
}

export default App

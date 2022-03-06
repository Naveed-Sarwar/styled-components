
import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/slider/Sidebar';
import Home from '../pages/home/Home';

function Routing() {
   const [isOpen,setIsOpen] = useState(false)

   const toggle=()=>{
       setIsOpen(!isOpen)
   }
    return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Home />
    </Router>
  );
}

export default Routing;

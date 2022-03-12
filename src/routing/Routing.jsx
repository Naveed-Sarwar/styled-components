import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/slider/Sidebar";
import Home from "../pages/home/Home";
import { homeObjOne, homeObjThree, homeObjTwo } from "../pages/home/HomeData";
import InfoSection from "../pages/home/InfoSection/InfoSection";
import ServiceSection from "../pages/home/serviceSection/ServiceSection";

function Routing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Home />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServiceSection />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Routing;

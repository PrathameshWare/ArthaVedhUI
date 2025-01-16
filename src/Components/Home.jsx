import React, { useState } from "react";
import Navbar from './Navbar/Navbar'
import Leftbar from './Leftbar/Leftbar'
import '../styles/home.css';
import RightSide from './Rightbar/RightSide.jsx';
import LightWeightCharts from './LightWeightCharts/Charts.jsx'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
// import exampleImage from '../assets/chart.png';
function Home() {
  const [companyName, setCompanyName] = useState("TCS");

  return (
    <>
      <Leftbar />
      <Navbar setCompanyName={setCompanyName} />
      
      <LightWeightCharts companyName={companyName} />
      <RightSide />
    </>
  );
}

export default Home

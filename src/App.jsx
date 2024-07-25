import { useEffect, useState } from "react";
import Back from "./components/Back";
import MainBottom from "./components/MainBottom";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Speed from "./components/Speed";
import Preloader from "./components/Preloader";
import useLocoScroll from './hooks/useLocoScroll'

export default function App() {
  const [loading, setloading] = useState(true);
  useLocoScroll(!loading);
  useEffect(() => {
    
    setTimeout(()=>{
    setloading(false);
    },2000)
    
  }, [])
  
 
  
  return (
    <>
    {loading ?( <Preloader/>):(<div data-scroll-container id="main-container" >
      <Back/>
      <Navbar/>
      <Scroll/>
      <MainBottom/>
      <Speed/>
      </div>)}
    </>
  )
}
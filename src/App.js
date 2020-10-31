import React,{useState,useEffect} from 'react'
import FullScreen from './components/FullScreen'
// import logo from './logo.svg';
// import './App.css';
import Facial from './components/Facial';
import StoT from './components/StoT';

function App() {
 
  const [tabSwitch,setTabSwitch]=useState("");
  const [tsn,setTsn]=useState(0);


  useEffect(() => {
    document.addEventListener("visibilitychange",()=>{
      document.title=document.visibilityState;
      setTabSwitch(document.visibilityState);
      console.log(tabSwitch);
    })
    
  }, [])

  useEffect(()=>{
    setTsn(prev=>prev+0.5)
    console.log(tsn);
  },[tabSwitch])
// akmklasmcklamck
  return (
    <div >
      <h1>This is the main page</h1>
      <input type="text " />
      <div className="fss">
      {/* <FullScreen/> */}
      <StoT/>
      </div>
      <button onChange={()=>{
        document.querySelector(".fss").requestFullscreen()
      }}></button>
      
    
      <Facial/>
    </div>
  )
}

export default App

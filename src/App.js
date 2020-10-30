import React,{useState,useEffect} from 'react'
import FullScreen1 from './components/FullScreen1'
// import logo from './logo.svg';
// import './App.css';
import Facial from './components/Facial';

function App() {
 
  const [tabSwitch,setTabSwitch]=useState("");
  const [tsn,setTsn]=useState(0);


  useEffect(() => {
    document.addEventListener("visibilitychange",()=>{
      document.title=document.visibilityState;
      setTabSwitch(document.visibilityState);
      console.log(tabSwitch);
    })
    // return () => {
    //   cleanup
    // }
  }, [])

  useEffect(()=>{
    setTsn(prev=>prev+0.5)
    console.log(tsn);
  },[tabSwitch])

  return (
    <div >
      <h1>This is the main page</h1>
      <input type="text " />
      <div className="fss">
      <FullScreen1/>
      </div>
      <button onChange={()=>{
        document.querySelector(".fss").requestFullscreen()
      }}></button>
      
    
      <Facial/>
    </div>
  )
}

export default App

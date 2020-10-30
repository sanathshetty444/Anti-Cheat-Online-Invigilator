import React,{useState,useEffect} from 'react'
import FullScreen from './components/FullScreen'
import logo from './logo.svg';
import './App.css';
import Facial from './components/Facial';

function App() {
 

  return (
    <div >
      <h1>This is the main page</h1>
      <input type="text " />
      <div className="fss">
      <FullScreen/>
      </div>
      <button onChange={()=>{
        document.querySelector(".fss").requestFullscreen()
      }}></button>
      
    
      <Facial/>
    </div>
  )
}

export default App

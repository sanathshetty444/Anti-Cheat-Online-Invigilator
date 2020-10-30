import React,{useState,useEffect} from 'react'
import FullScreen from './components/FullScreen'

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
      
    </div>
  )
}

export default App

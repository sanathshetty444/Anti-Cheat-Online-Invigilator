import React, {useEffect, useState} from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Facial from './Facial';
import StoT from './StoT';
import QuizForm from '../screens/QuizForm'

function FullScreen1() {
  const handle = useFullScreenHandle();
  const [fullScreenMode,setFullScreenMode]=useState(false)
  const [count,setCount]=useState(0)
  const [s,sets]=useState(false)

  useEffect(()=>{
    setCount(prev=>prev+1);
    console.log("fs="+count);
  },[fullScreenMode])
   
  
  return (
    <div>
      <button onClick={handle.enter}>
        Start Quiz
      </button>
 
      <FullScreen handle={handle} onChange={()=>{
        setFullScreenMode(prevprops=>!prevprops)
        console.log('>>>>',s)
        sets(prevprops=>!prevprops)
        console.log(fullScreenMode);
      }}>
        <div>
          {!s && <QuizForm style={{backgroundColor:'white'}}/>}
         
        </div>
      </FullScreen>
    </div>
  );
}

export default FullScreen1

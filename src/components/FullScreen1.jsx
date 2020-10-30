import React, {useEffect, useState} from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function FullScreen1() {
  const handle = useFullScreenHandle();
  const [fullScreenMode,setFullScreenMode]=useState(false)
  const [count,setCount]=useState(0)


  useEffect(()=>{
    setCount(prev=>prev+1);
    console.log("fs="+count);
  },[fullScreenMode])

  return (
    <div>
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>
 
      <FullScreen handle={handle} onChange={()=>{
        setFullScreenMode(prevprops=>!prevprops)
        console.log(fullScreenMode);
      }}>
        <div style={{backgroundColor:"red"}}>
              dsfjkjsdhkjhskjdkjldjfslkldsjfkljk
              dfksdfjkljsdfkl
        </div>
      </FullScreen>
    </div>
  );
}

export default FullScreen1

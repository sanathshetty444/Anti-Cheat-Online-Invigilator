import React,{useState,useEffect} from 'react'

function TabSwitch() {
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
    return (
        <div>
            
        </div>
    )
}

export default TabSwitch

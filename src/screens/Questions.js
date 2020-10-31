import React from 'react'
import StoT from '../components/StoT'
function Questions({q,answers,sA}) {
    const [answer,setAnswer]=React.useState('');
    const [lol,slol]=React.useState(true);
    const ref=React.useRef()
    // console.log(answer);
    function change(){
        setAnswer(ref.current.value)

    }
    function submit(){
        slol(false)
        sA((prev)=>[...prev,{q:q,a:answer}])
        console.log(answers);
    }
    return (
        <div style={{borderRight:lol?'none':'4px solid green',padding:'10px'}} className='d-flex justify-content-between col-9 offset-2'>
             <input className="form-control" style={{width:'1000px'}} type="text" ref={ref} value={answer} onChange={change}/>
            <StoT answer={answer} setAnswer={setAnswer}/>
            <button type ="button" style={{border:'2px solid teal',backgroundColor:'white',borderRadius:'5px'}} onClick={submit}>Submit Your Response</button>
        </div>
    )
}

export default Questions
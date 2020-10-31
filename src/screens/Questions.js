import React from 'react'
import StoT from '../components/StoT'
function Questions({q,answers,sA}) {
    const [answer,setAnswer]=React.useState('');
    const [lol,slol]=React.useState('');
    const ref=React.useRef()
    // console.log(answer);
    function change(){
        setAnswer(ref.current.value)

    }
    function submit(){
        
        sA((prev)=>[...prev,{q:q,a:answer}])
        console.log(answers);
    }
    return (
        <div>
            <input type="text" ref={ref} value={answer} onChange={change}/>
            <StoT answer={answer} setAnswer={setAnswer}/>
            <button type ="button" onClick={submit}>Submit Your Response</button>
        </div>
    )
}

export default Questions

import React from 'react'
import StoT from '../components/StoT'
function Questions({q,answers,sA}) {
    const [answer,setAnsewer]=React.useState('');
    console.log(answer);
    function change(){
        sA([...answers,{q:q,a:answer}])
        console.log("llollol")

    }
    return (
        <div>
            <input type="text" value={answer} onChange={change}/>
            <StoT answer={answer} setAnswer={setAnsewer}/>
        </div>
    )
}

export default Questions

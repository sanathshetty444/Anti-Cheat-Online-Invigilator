import React, { useState } from 'react'
import StoT from '../components/StoT'
import Q from '../screens/Questions'
import { confirmAlert } from 'react-confirm-alert';
import ReactPageScroller from "react-page-scroller";

function QuizForm({exit,esc}) {
    
    const[answers,sA]=React.useState([{q:"",a:""}])
    const [exittoggle,setexittoggle]=useState(true)
    function submit(){
        
        setexittoggle(prev=>!prev)
        console.log(exittoggle);

    }
    return (
        <div >
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className=" h2 text-light">Questions </div>
                <button className='btn btn-danger ' style={{marginLeft:'96%',marginTop:'-3%'}} onClick={submit} >Exit</button>
             </div>
            {!exittoggle && <div style={{marginLeft:'92%'}}>
                <p>R u Sure</p>
                <button className='btn btn-danger'  onClick={submit} onClick={exit}>yes</button> &emsp;
                <button className='btn btn-info' onClick={submit}>no</button>
            </div>}
            <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center flex-column ">
                <form action="" style={{backgroundColor:'white',paddingLeft:'5%',paddingTop:'5%'}}>
                    <ReactPageScroller containerHeight={'80vh'}	>
                    <div>
                    <p>Question 1 : </p>
                    <Q q='q1' answers={answers} sA={sA} />
                    
                    <p>Question 2 : </p>
                    <Q q='q2'answers={answers} sA={sA}/>
                    <p>Question 3 : </p>
                    <Q q='q3'answers={answers} sA={sA}/>
                    <p>Question 4 : </p>
                    <Q q='q4'answers={answers} sA={sA}/>
                    
                    
                    <p>Question 5 : </p>
                    <Q q='q5'answers={answers} sA={sA}/>
                    </div>
                    <div>
                    <p>Question 6 : </p>
                    
                    <Q q='q6'answers={answers} sA={sA}/>
                    <p>Question 7 : </p>
                    <Q q='q7'answers={answers} sA={sA}/>
                    
                    <button onClick={(e)=>{
                        e.preventDefault();
                        sA((prev)=>[...prev,{q:"",a:""}])
                        console.log(answers)
                    
                    }
                        
                    }>Submit</button>
                    </div>
                </ReactPageScroller>
            </form>
            </div>
            
            
           
        </div>
    )
}

export default QuizForm

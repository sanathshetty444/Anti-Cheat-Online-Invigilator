import React, { useState } from 'react'
import StoT from '../components/StoT'
import Q from '../screens/Questions'
import { confirmAlert } from 'react-confirm-alert';
import ReactPageScroller from "react-page-scroller";
import Axios from 'axios';

function QuizForm({exit,esc}) {
    const style={

        background: "#2980B9",  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
    
      }
    const[answers,sA]=React.useState([{q:"",a:""}])
    const [exittoggle,setexittoggle]=useState(true)
    const [msg,setmsg]=useState(false)
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
            <div style={{height:'100vh',}} className="d-flex justify-content-center align-items-center flex-column ">
                <form action="" style={{background:'linear-gradient(90deg, rgba(249,254,255,1) 6%, rgba(4,179,195,1) 47%, rgba(0,212,255,1) 100%,transparent)',paddingLeft:'5%',paddingTop:'5%'}}>
                    <ReactPageScroller containerHeight={'80vh'}	>
                    <div style={style}>
                    <p>Question 1 :What does the government spend its money on? </p>
                    <Q q='What does the government spend its money on?' answers={answers} sA={sA} />
                    
                    <p>Question 2 : Who does the government owe money to? </p>
                    <Q q='Who does the government owe money to?'answers={answers} sA={sA}/>
                    <p>Question 3 : Where does the money come from? </p>
                    <Q q=' Where does the money come from?'answers={answers} sA={sA}/>
                    <p>Question 4 : Does a devaluation help the economy?</p>
                    <Q q='Does a devaluation help the economy?'answers={answers} sA={sA}/>
                    
                    
                    <p>Question 5 : What is the importance of economics? </p>
                    <Q q='What is the importance of economics?'answers={answers} sA={sA}/>
                    </div>
                    <div>
                    <p>Question 6 : Does globalisation help or hinder developing countries?</p>
                    <Q q='Does globalisation help or hinder developing countries?'answers={answers} sA={sA}/>
                    <p>Question 7 : Should higher education be free? </p>
                    <Q q='Should higher education be free?'answers={answers} sA={sA}/>
                    
                    <button className="btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        sA((prev)=>[...prev,{q:"",a:""}])
                        
                        let new_answers=answers.reverse();
                        // // var arr = ["X_row7", "X_row4", "X_row6", "X_row10", "X_row8", "X_row9", "X_row11", "X_row7", "X_row4", "X_row6", "X_row10", "X_row8", "X_row9", "X_row11", "X_row7", "X_row4", "X_row6", "X_row10", "X_row8", "X_row9", "X_row11", "X_row7", "X_row4", "X_row6", "X_row10", "X_row8", "X_row9", "X_row11", "X_row7", "X_row4", "X_row6", "X_row10", "X_row8", "X_row9", "X_row11", "X_row7", "X_row4", "X_row6", "X_row10", "X_row8", "X_row9", "X_row11"];

                        // var filteredArray = new_answers.filter(function(item, pos){
                        // return new_answers.indexOf(item.q)== pos; 
                        // });
                        // new_answers = new Set(new_answers)
                        let newer=[];
                        const unique = [...new Set(new_answers.map(item => item.q))];
                        let j=0;
                        for(let i=0;i<new_answers.length;i++){
                            if(unique[j]==new_answers[i].q){
                                newer.push(new_answers[i])
                                j++
                            }
                        }
                        console.log(newer)
                        Axios.post('/answers',newer)
                        .then(r=>{
                            console.log(r)
                        })
                        setmsg(true)
                    
                    }
                    
                        
                    }>Submit</button>
                    {msg && <div className="text-center bg-success">You may now Exit</div>}
                    </div>
                    
                </ReactPageScroller>
            </form>
            </div>
            
            
           {/* kdnsknas */}
        </div>
    )
}

export default QuizForm

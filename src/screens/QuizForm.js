import React from 'react'
import StoT from '../components/StoT'
import Q from '../screens/Questions'
import { confirmAlert } from 'react-confirm-alert';
function QuizForm({exit,esc}) {
    
    const[answers,sA]=React.useState([{q:"",a:""}])
    function submit(){
        console.log("exit");
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }
    return (
        <div>
            
            <button >Exit</button>
            
            <form action="" style={{backgroundColor:'white'}}>
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
                <p>Question 6 : </p>
                <Q q='q6'answers={answers} sA={sA}/>
                <p>Question 7 : </p>
                <Q q='q6'answers={answers} sA={sA}/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    sA((prev)=>[...prev,{q:"",a:""}])
                    console.log(answers)
                
                }
                    
                }>Submit</button>
            </form>
            
           
        </div>
    )
}

export default QuizForm

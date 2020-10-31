import React from 'react'
import StoT from '../components/StoT'
import Q from '../screens/Questions'
function QuizForm() {
    const [answer,setAnsewer]=React.useState('');
    const[answers,sA]=React.useState([{q:"",a:""}])
    return (
        <div>
            <form action="" style={{backgroundColor:'white'}}>
                <p>Question 1 : </p>
                <Q q='q1' answers={answers} sA={sA} />
                <Q q='q2'answers={answers} sA={sA}/>
            </form>
           
        </div>
    )
}

export default QuizForm

import React from 'react'
import TabSwitch from '../components/TabSwitch'
import Fullscreen from '../components/FullScreen1'
import StoT from '../components/StoT'
import Camera from '../components/Camera'

function QuizPage() {
    return (
        <div>
            <h1 className="text-center">Quiz Guidelines</h1>
            <p className="lead col-10 offset-1">
            1. Language. The quizzes are all in English, but you may answer in any official language of a country with a team participating in the Nations Team Quiz at the Quiz Olympiad. <br/>

2. Quiz Participation. Prior to the Quiz Olympiad, you will be asked to declare which of the specialist quizzes you will take part in. Once this list has been published, you will not be able to change your selections. <br/>

3. Cheating. Anyone suspected by an official of cheating will be disqualified. You must not use any mobile device during a quiz competition.
<br/>
4. Challenges. If at any time you think your answer should be accepted, then you must complete a challenge slip. These will be available at the front of the room. This MUST be done BEFORE the start of the next round. Every effort will be made to check alternative answers offered by a contestant challenging an answer through the correct channel, but ultimately the question master’s decision is final.
<br/>
5. Late Arrival. If a player arrives after a competition has begun, they will not be allowed into the quiz room as it could disrupt other players. Organisers will find a suitable time for a late player to join the quiz that will not cause problems for other competitors. Please don’t be late.
<br/>
</p>
            {/* <Camera /> */}
            {/* Once You click on start quiz there is no turning back */}
            <TabSwitch/>
            <Fullscreen/>
        </div>
    )
}

export default QuizPage

import React from 'react'
import TabSwitch from '../components/TabSwitch'
import Fullscreen from '../components/FullScreen1'
import StoT from '../components/StoT'

function QuizPage() {
    return (
        <div>
            {/* Once You click on start quiz there is no turning back */}
            <TabSwitch/>
            <Fullscreen/>
        </div>
    )
}

export default QuizPage

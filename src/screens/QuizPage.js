import React from 'react'
import TabSwitch from '../components/TabSwitch'
import Fullscreen from '../components/FullScreen1'
import StoT from '../components/StoT'
import Camera from '../components/Camera'

function QuizPage() {
    return (
        <div>
            {/* <Camera /> */}
            {/* Once You click on start quiz there is no turning back */}
            <TabSwitch/>
            <Fullscreen/>
        </div>
    )
}

export default QuizPage

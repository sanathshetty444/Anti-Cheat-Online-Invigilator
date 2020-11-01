import React, { useState, useEffect } from 'react'
// import './App.css'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function StoT({answer,setAnswer}) {
  
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      // console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
    setAnswer(note)
    
  }
  function toggle(){
    handleSaveNote();
    setIsListening(prevState => !prevState)
    
  }
  return (
    <>
     
      <div className="container" >
        <div className="box">
         
          {isListening ? <span></span> : <span>🎙️</span>}
          
          <button className="btn btn-primary p-3 " style={{backgroundSize:'contain', backgroundImage: "url(" + "data:image/png;base64,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" + ")"}}  type='button' onClick={toggle}>
            
          </button>
          <p>{note}</p>
        </div>
        
      </div>
    </>
  )
}

export default StoT;

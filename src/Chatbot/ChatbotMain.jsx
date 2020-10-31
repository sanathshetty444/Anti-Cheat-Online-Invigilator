import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function ChatbotMain() {

  const btnStyle ={
    borderRadius:"50%",
    height:"4.7rem",
    position: "fixed",
    bottom: "10px",
    right: "2rem", 
  }

  const cb={
    position: "fixed",
    bottom: "4.5rem",
    right: "2rem", 
    border: "1px solid black",
    boxShadow:"3px 3px 20px 3px grey"
  }

  return (
    <>
       {/* <button className="btn btn-primary" style={btnStyle} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    ChatBot
  </button> */}
      <div className="collapse" style={cb} id="collapseExample">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </div>
      <button className="btn btn-primary" style={btnStyle} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      ChatBot
  </button>
    </>
  )
}

export default ChatbotMain
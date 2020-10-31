import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function ChatbotMain() {
  return (
    <div>
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
  )
}

export default ChatbotMain

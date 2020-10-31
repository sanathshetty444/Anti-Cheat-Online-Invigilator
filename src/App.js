import React,{useState,useEffect} from 'react'
import FullScreen1 from './components/FullScreen1'
import TabSwitch from './components/TabSwitch'
import LoginPage from './screens/LoginPage'
import { BrowserRouter, Route, Link } from "react-router-dom";
import QuizPage from './screens/QuizPage';
// import logo from './logo.svg';
// import './App.css';
// import Facial from './components/Facial';
// import StoT from './components/StoT';
import ChatbotMain from './Chatbot/ChatbotMain';

function App() {
 
 
// akmklasmcklamck
  return (
    <div >
      <BrowserRouter>

      <Route exact path='/' ><LoginPage/></Route>
      <Route exact path='/quiz' ><QuizPage/></Route>
      </BrowserRouter>
      <ChatbotMain/>
    </div>
  )
}

export default App

import { useEffect, useState } from "react";
import Input from "./components/Input";
import ChatMessages from "./components/ChatMessages";
import './App.css'
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";

const App = () => {
   const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('message')) ||[]);
    //you use useEffect to add response to the chatbot
     useEffect(() => {
      Chatbot.addResponses({
       'Generate an image': `sorry, I've not been trained to do that`,
       'Generate a unique id': function id() {return `Sure! here is your unique id: ${crypto.randomUUID()}`},
       "what's your name": 'My name is robot james a robot that assist you in carrying out your request or complains',
       "that's a nice name": "thanks, what's your own name? and what's your request",
       "My name is David" : "it's nice chatting with you! what's your reuest",
       "nothing, I don't have a request": "Ok let me know when you have a request",
       "what can you do?": "I can flip a coin, I can roll a dice, I can give a date, I can give an ID, I can I answer some request questions",
       "hi": "Hello ho may I assist you?",
       "What's the time now?": `The time is: ${dayjs().format(`h:mma`)}`
       
      })
     }, [])

   useEffect(() => {
      localStorage.setItem('message', JSON.stringify(chatMessages))
   }, [chatMessages])

  return (
    <div className="app-container">
    <ChatMessages 
    chatMessages={chatMessages}
    
    />
     <Input 
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App;
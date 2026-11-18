import { useState } from "react";
import { Chatbot } from "supersimpledev";
import loadingSpinner from '../assets/loading-spinner.gif';
import './Input.css'
import dayjs from "dayjs";
// import dayjs from "dayjs";


const Input = ({ chatMessages, setChatMessages }) => {

    const [inputedMessages, setInputedMessages] = useState('');

    const saveMessage = (e) => {
                  setInputedMessages(e.target.value);             
    }


   async function sendMessage() {

    if(inputedMessages === "" || inputedMessages === " ") {
      return
    } else {
const newChatMessage =      [ 
                       ...chatMessages,
                    {
                            sender: 'user',
                            message: inputedMessages,
                            id: crypto.randomUUID(), 
                            time: dayjs().valueOf()
                    }]

                
                setChatMessages([
                    ...newChatMessage,
                     {
                    sender: 'robot',
                    message: <img className="loading-spinner" alt="The loading spinner before the reply" src={loadingSpinner} />,
                    id1: crypto.randomUUID(),
    }, 
  ])      
  
    const response = await Chatbot.getResponseAsync(inputedMessages);
  
  setChatMessages([
                    ...newChatMessage,
                     {
                    sender: 'robot',
                    message: response,
                    id: crypto.randomUUID(),
                    time: dayjs().valueOf()
                    
    }, 
  ]) 
     setInputedMessages('');
    }
    
            
   }
 const clear = () => {
        setChatMessages([]);
     }
   
  return (
   
    <div className="input-container">
        <button className="clear-button" onClick={clear}>Clear</button>
         
      <input className="chat-input" type="text" 
      placeholder="Say hello to chatbot"
      size="30"
      onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
      value={inputedMessages}
      onChange={saveMessage}
      />
      <button className="send-button" 
      onClick={sendMessage}
      >
        Send</button>  
       
    </div>
    
  )
}

export default Input;
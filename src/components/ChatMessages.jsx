import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import './ChatMessages.css'

const useAutoScroll = dependencies => {
  const refContainer = useRef(null);
     useEffect(() => {
      const refToCurrent = refContainer.current;
      if(refToCurrent) {
        // refToCurrent.scrollTopp = refToCurrent.scrollHeight;
        refToCurrent.scrollTop = refToCurrent.scrollHeight;
        
      }
     }, [dependencies])
     return refContainer
}

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useAutoScroll([chatMessages])

  return (
    <div
    className='chat-messages-container'
    ref={chatMessagesRef} 
    >
        {chatMessages.map((chatMessage) => {
return(
        <ChatMessage 
        message={chatMessage.message}
        sender={chatMessage.sender}
        time={chatMessage.time}
        id={chatMessage.id}
        />
)
        })}
    </div>
  )
}

export default ChatMessages;
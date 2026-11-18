import robotProfile from '../assets/robot.png';
import userProfile from '../assets/user.png';
import './ChatMessage.css';
import dayjs from 'dayjs';


 const ChatMessage = ({ message, sender, time }) => {
  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>

{sender === 'robot' && <img className='chat-profile-image' alt='robot-profile-image' src={robotProfile} />}

<div className='chat-message-text'>
    {message}
    {time && (
    <div className='time'> {dayjs(time).format(`h:mma `)} ago</div>
)}
</div>


{sender === 'user' && <img className='chat-profile-image' src={userProfile} />}

    </div>
  )
}

export default ChatMessage;

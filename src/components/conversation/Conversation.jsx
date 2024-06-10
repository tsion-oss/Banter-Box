import React from 'react';
import useConversation from '../../store/useConversation.js'
import "./Conversation.scss"
import { useSocketContext } from '../../context/SocketContext.jsx';

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id

    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
          <div className={isSelected ? 'conversation selected' : 'conversation'}
               onClick={() => setSelectedConversation(conversation)}  >
             <div className={`avatar ${isOnline ? "online": ""}`}>
                <div>
                    <img alt='user avatar'
                         src={conversation.profilePic}/>
                      {/* <img src={`https://avatar.iran.liara.run/username?username=[${conversation.fullName}]`}/> */}

                </div>
             </div>

             <div>
                    <p>{conversation.fullName}</p>
             </div>
          </div>

          <div className='divider'/>
        </>
    );
};

export default Conversation;
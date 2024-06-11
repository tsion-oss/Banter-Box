import React from 'react';
import useGetConversations from '../../hooks/useGetConversations.js';
import "./UsersPopup.scss";
import useConversation from '../../store/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

const UsersPopup = () => {
    const { loading, conversations } = useGetConversations();
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();

    return (
      <>
        {conversations?.map((conversation) => {
          const isSelected = selectedConversation?._id === conversation._id;
          const isOnline = onlineUsers.includes(conversation._id);

          return (
            <div 
              key={conversation._id}  
              className={`conversation-popup ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="avatar-container">
                <img 
                  alt='user avatar'
                  src={conversation.profilePic}
                />
                {isOnline && <div className="online"></div>}
              </div>

              <div>
                <p>{conversation.fullName}</p>
              </div>
            </div>
          );
        })}
      </>
    );
}

export default UsersPopup;

import React from 'react';
import Conversation from '../conversation/Conversation';
import useGetConversations from '../../hooks/useGetConversations.js'
import useConversation from '../../store/useConversation.js';
import useGetConversationsMessages from '../../hooks/useGetConversationsMessages.js';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const { allMessages } = useGetConversationsMessages();
  const { selectedConversation, usersWithMessages, setUsersWithMessages } = useConversation();

  // Render conversations with messages
  const renderConversations = () => {
    if (!loading && allMessages) {
      return conversations.map(conversation => {
        const messages = allMessages[conversation._id];
        if (messages && messages.length > 0) {
          return (
            <div className='conversations'>
              <Conversation
                key={conversation._id}
                conversation={conversation}
                messages={messages}
              />
            </div>
          );
        }
        return null;
      });
    }
    return null;
  };

  return (
    <>
      {renderConversations()}
    </>
  );
};

export default Conversations;

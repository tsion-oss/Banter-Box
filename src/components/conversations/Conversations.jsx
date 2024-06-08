import React from 'react';
import Conversation from '../conversation/Conversation';
import useGetConversations from '../../hooks/useGetConversations.js'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  // console.log(conversations)
    return (
        <div>
          {conversations.map((conversation, idx) => (
            <Conversation
               key={conversation._id}
               conversation={conversation}
               lastIdx={idx === conversation.length - 1}
            />
          ))
          }
        </div>
    );
};

export default Conversations;
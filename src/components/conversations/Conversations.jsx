import React, { useEffect } from 'react';
import Conversation from '../conversation/Conversation';
import useGetConversations from '../../hooks/useGetConversations.js';
import useConversation from '../../store/useConversation.js';
import useGetConversationsMessages from '../../hooks/useGetConversationsMessages.js';



const Conversations = ({ rerender, setReRender }) => {
  const {  conversations } = useGetConversations();
  const { allMessages } = useGetConversationsMessages();
  const { setUsersWithMessages } = useConversation();
  useEffect(() => {
   
      if (  allMessages ) {
        setUsersWithMessages(allMessages);
      }
      if (rerender) {
        setReRender(false)
      }
   
  }, [allMessages, setUsersWithMessages, rerender, setReRender]);

  
  const renderConversations = () => {
    if (allMessages) {
      return conversations.map(conversation => {
        const messages = allMessages[conversation._id];
        if (messages && messages.length > 0) {
          return (
            <div className='conversations' key={conversation._id}>
              <Conversation
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



import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import "./MessageInput.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export const MessageInput = ({ setReRender }) => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage(message)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!message) return;
        await sendMessage(message)
        setMessage("")
        setReRender(true)
    }
    return (
        <form className='input-form' onSubmit={handleSubmit}>
            <div className='input-form__div'>
                <input type='text'
                        placeholder='Send a message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                <button type='submit'
                        ><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </form>
    );
};



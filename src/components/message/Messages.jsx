import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import MessageInput from '../messageInput/MessageInput';
import useGetMessages from '../../hooks/useGetMessages';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import "./Messages.scss"

const Message = ({ message }) => {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    
    console.log(authUser)


    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic

    return (
        <div className={`chat ${chatClassName}`}>
            <div>
                <div>
                    <img alt='chat bubble component'
                         src={profilePic}
                    />
                </div>
            </div>
            <div className='message-bubble'>{message.message}</div>
            <div>{message.createdAt}</div>
            
        </div>
    );
};



const Messages = () => {
    const { messages, loading } = useGetMessages()
    // console.log("messages: ", messages)

    return(
        <div>
           <div>
            {messages.length > 0 && messages.map((message) => (
                <Message key={message._id}
                         message={message}/>
            ))}

            {messages.length === 0 && (
                <p>Send a message to start the conversation</p>
            )
            }
          </div>
          <MessageInput/>
        </div>
    )
   
}

export default Messages;
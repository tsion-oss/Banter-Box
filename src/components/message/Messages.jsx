import React, { useState, useEffect, useRef } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import MessageInput from '../messageInput/MessageInput';
import useGetMessages from '../../hooks/useGetMessages';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import "./Messages.scss";
import useListenMessages from '../../hooks/useListenMessages';
import "/src/index.css";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const shakeClass = message.shouldShake ? "shake" : "";

    const extractTime = (dateString) => {
        const date = new Date(dateString);
        const hours = padZero(date.getHours());
        const minutes = padZero(date.getMinutes());
        return `${hours}:${minutes}`;
    };
    
    const padZero = (number) => {
       return number.toString().padStart(2, "0");
    };

    const formattedDate = extractTime(message.createdAt);

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat__main-box'>
                <div className={`message-bubble ${shakeClass} `}>{message.message}</div>
                <div className='chat__time'>{formattedDate}</div>
            </div>
        </div>
    );
};

const Messages = () => {
    const { messages } = useGetMessages();
    const messagesEndRef = useRef(null);
    useListenMessages();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className='messages'>
            <div className='messages__main-div'>
                {messages.length > 0 && messages.map((message) => (
                    <Message key={message._id} message={message} />
                ))}

                {messages.length === 0 && (
                    <div>
                        <p>Send a message to start the conversation</p>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className='message-input'>
                <MessageInput />
            </div>
        </div>
    );
};

export default Messages;

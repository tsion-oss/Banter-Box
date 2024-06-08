import React from 'react';
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage(message)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!message) return;
        await sendMessage(message)
        setMessage("")
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
           <input type='text'
                  placeholder='Send a message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}/>
           <button type='submit'
                   >Send</button>
        </div>
     </form>
    );
};

export default MessageInput;
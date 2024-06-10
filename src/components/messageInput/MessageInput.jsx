import React from 'react';
import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';
import "./MessageInput.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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

export default MessageInput;

import { useEffect } from 'react';
import useConversation from '../../store/useConversation.js';
import Messages from '../message/Messages.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';
import "./MessageContainer.scss"

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
  

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='message-container'>
            {!selectedConversation? 
            <NoChatSelected/> :
            <>
            {/* Header */}
            <div className='message-container__header'>
                <div>
                    <img src={selectedConversation.profilePic} alt='user avatar' />
                </div>
                <div>
                    {/* <span>To:</span> */}
                    <span>{selectedConversation.fullName}</span>
                </div>
            </div>

            <Messages/>
            </>
            }
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext()
    return(
        <div>
            <div>
                <p>Welcome {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
            </div>
        </div>
    )
}
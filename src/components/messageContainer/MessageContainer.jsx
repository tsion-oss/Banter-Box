
import { useEffect } from 'react';
import useConversation from '../../store/useConversation.js';
import Messages from '../message/Messages.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
  

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div>
            {!selectedConversation? 
            (<NoChatSelected/>) :
            <>(
            {/* Header */}
            <div>
                <span>To:</span>
                <span>{selectedConversation.fullName}</span>
            </div>

            <Messages/>
            {/* <MessagesInput/> */}

         
             )
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

import { useEffect } from 'react';
import useConversation from '../../store/useConversation.js';
import Messages from '../message/Messages.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';
import "./MessageContainer.scss"
import logo from '../../assets/logo/banter-box.png'
import { useSocketContext } from '../../context/SocketContext.jsx';

const MessageContainer = ({ setReRender }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const { onlineUsers } = useSocketContext();
  

    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation])

    return (
        <div className='message-container'>
            {!selectedConversation? 
            <NoChatSelected/> :
            <>
            <div className='message-container__header'>
                
                    <div>
                        <img src={selectedConversation.profilePic} alt='user avatar' />
                    </div>
                    <div>
                        <span>{selectedConversation.fullName}</span>
                    </div>
        
            </div>

            <Messages setReRender={setReRender}/>
            </>
            }
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext()
    return(
            <div className='introduction'>
                <img alt='banter box logo' src={logo}/>
                <div>
                    <p className='name'>Welcome <span className='full-name'>{authUser.fullName}</span></p>
                    <p className='select'>Select a chat to start messaging</p>
                </div>
            </div>
    )
}
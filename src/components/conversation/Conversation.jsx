import React from 'react';
import useConversation from '../../store/useConversation.js'
import "./Conversation.scss"

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id

    return (
        <>
          <div className={isSelected ? 'conversation selected' : 'conversation'}
               onClick={() => setSelectedConversation(conversation)}  >
             <div>
                <div>
                    <img alt='user avatar'
                         src={conversation.profilePic}/>
                </div>
             </div>

             <div>
                <div>
                    <p>{conversation.fullName}</p>
                    <span>emoji</span>
                </div>

             </div>
          </div>

          <div className='divider'/>
        </>
    );
};

export default Conversation;
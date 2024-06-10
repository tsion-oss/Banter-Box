import Conversation from '../conversation/Conversation';
import useGetConversations from '../../hooks/useGetConversations.js'

const UsersPopup = () => {
    const { loading, conversations } = useGetConversations()
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

export default UsersPopup;
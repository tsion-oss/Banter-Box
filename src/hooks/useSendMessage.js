import useConversation from '../store/useConversation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const useSendMessage = (message) => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()
    const { authUser } = useAuthContext()


    const sendMessage = async () => {
        setLoading(true)
        
        
        const token = authUser.token;
        try{

            const res = await axios.post(`http://localhost:8000/api/messages/send/${selectedConversation._id}`, 
            { message: message }, {
                headers: {"jwt": token}
            })
            const data = await res.data
            if(data.error) throw new Error(data.error)

            setMessages([...messages, data])

        }catch (error) {
           toast.error(error.message)
        }finally{
           setLoading(false)
        }
    }

    return { sendMessage, loading }
   
}

export default useSendMessage;
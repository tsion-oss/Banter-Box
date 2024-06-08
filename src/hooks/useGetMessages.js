import React, { useEffect, useState } from 'react';
import useConversation from '../store/useConversation';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext';

const useGetMessages = () => {
  const [loading, setLoading ]= useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()
  const { authUser } = useAuthContext()

  useEffect(() =>{
    const getMessages = async () => {
        setLoading(true)

        const token = authUser.token;

        try{
            const res = await axios.get(`http://localhost:8000/api/messages/${selectedConversation._id}`,  {
                headers: {"jwt": token}
            })

            const data = res.data
            if(data.error) throw new Error(data.error)
            setMessages(data)

        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    if (selectedConversation) {
        getMessages()
      }
  },[selectedConversation?._id, setMessages])

    return { messages, loading }
};

export default useGetMessages;
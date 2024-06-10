import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

function useGetConversations() {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    const { authUser } = useAuthContext()

    // console.log(conversations)

    useEffect(() => {
       const getConversations = async () => {
        setLoading(true)

        
        const token = authUser.token;
        
        try{
            const res = await axios.get("http://localhost:8000/api/users", {
                headers: {"jwt": token}
            })
            const data = await res.data
            
            if(data.error) {
                throw new Error(data.error)
            }
            setConversations(data)
        }catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
       }
       getConversations()
    }, [])
  return { loading, conversations }
}

export default useGetConversations
import React, { useEffect, useState } from 'react';
import useConversation from '../store/useConversation';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import useGetConversations from './useGetConversations';

const useGetConversationsMessages = () => {
    const [loading, setLoading] = useState(false);
    const { usersWithMessages, setUsersWithMessages } = useConversation();
    const { conversations } = useGetConversations();
    const { authUser } = useAuthContext();
    const [allMessages, setAllMessages] = useState(null);

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);

            const token = authUser.token;

            try {

                for (const conversation of conversations) {
                    const res = await axios.get(`http://localhost:8000/api/messages/${conversation._id}`, {
                        headers: { "jwt": token }
                    });

                    const data = res.data;
                    if (data.error) throw new Error(data.error);

                    setAllMessages((prevMessages) => ({
                        ...prevMessages,
                        [conversation._id]: data
                    }));
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (conversations && conversations.length > 0) {
            getMessages();
        }
    }, [conversations]);

    return { allMessages, loading };
};

export default useGetConversationsMessages;

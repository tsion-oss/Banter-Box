import React, { useState } from 'react';
import useConversation from '../../store/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'
import "./SearchInput.scss"
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
    const [search, setSearch ] = useState("")
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return;
        if(search.length < 3) {
            return toast.error("Search term must be at least 3 characters long")
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

        if(conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else toast.error("No such user found!")
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' 
                   placeholder='Search chats'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}/>
            <button type='submit'
                    ><FaSearch size={20} color="white" /></button>
        </form>
    );
};

export default SearchInput;
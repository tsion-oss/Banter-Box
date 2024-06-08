import React from 'react';
import useLogout from '../../hooks/useLogout'
import SearchInput from '../searchInput/SearchInput';
import Conversations from '../conversations/Conversations.jsx'

const Sidebar = () => {
    const { loading, logout } = useLogout()
    return (
        <div className='sidebar'>
            <SearchInput/>
            <div></div>
            <Conversations/>

            <div>
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
    );
};

export default Sidebar;
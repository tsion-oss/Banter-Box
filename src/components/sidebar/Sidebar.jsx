import React from 'react';

import SearchInput from '../searchInput/SearchInput';
import Conversations from '../conversations/Conversations.jsx'
import "./Sidebar.scss"

const Sidebar = () => {
    
    return (
        <div className='sidebar'>
            <div className='sidebar__inside-div'>
                <SearchInput/>
                <Conversations/>
            </div>
            
        </div>
    );
};

export default Sidebar;
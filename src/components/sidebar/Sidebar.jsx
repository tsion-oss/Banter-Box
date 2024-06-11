import React from 'react';

import SearchInput from '../searchInput/SearchInput';
import Conversations from '../conversations/Conversations.jsx'
import "./Sidebar.scss"

const Sidebar = ({ rerender, setReRender }) => {
    
    return (
        <div className='sidebar'>
            <div className='sidebar__inside-div'>
                <SearchInput/>
                <Conversations rerender={rerender} setReRender={setReRender} />
            </div>
            
        </div>
    );
};

export default Sidebar;
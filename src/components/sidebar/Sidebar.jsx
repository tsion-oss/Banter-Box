import React from 'react';

import SearchInput from '../searchInput/SearchInput';
import Conversations from '../conversations/Conversations.jsx'
import "./Sidebar.scss"

const Sidebar = ({ rerender, setReRender }) => {
    
    return (
        <div className='sidebar'>
             <SearchInput/>
            <div className='sidebar__inside-div'>
               
               
                <Conversations rerender={rerender} setReRender={setReRender} />
             
            </div>
            
        </div>
    );
};

export default Sidebar;
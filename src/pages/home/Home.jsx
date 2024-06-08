import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messageContainer/MessageContainer.jsx'
import "./Home.scss"

const Home = () => {
    return (
        <div className='home'>
           <Sidebar/>
           <MessageContainer/>
        </div>
    );
};

export default Home;
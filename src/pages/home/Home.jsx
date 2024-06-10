import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messageContainer/MessageContainer.jsx'
import "./Home.scss"
import UsersPopup from '../../components/usersPopup/UsersPopup.jsx';
import { useState, useEffect } from 'react';
import useConversation from '../../store/useConversation.js';
import { FaUserPlus } from 'react-icons/fa';
import useLogout from '../../hooks/useLogout'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {
    const [isPopupVisible, setPopupVisible] = useState(false)
    const { selectedConversation } = useConversation()
    const { loading, logout } = useLogout()

    useEffect(() => {
        if (selectedConversation) {
            const timer = setTimeout(() => {
                setPopupVisible(false);
            }, 500) 

            return () => clearTimeout(timer)
        }
    }, [selectedConversation]);


    const handleCreateUserClick = () => {
        setPopupVisible(!isPopupVisible)
    }
    return (
        <div className='home'>
             <div className='home__create-div'>
                <button onClick={handleCreateUserClick} >
                    <FaUserPlus size={20} color="white" />
                </button>
                <div>
                    <button onClick={logout} className='logout-button'>
                    <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon' />
                    </button>
                </div>
             </div>
            <div className='home__sideNContainer-div'>
                <div className='home__inside-div'>
                      <Sidebar/>
                      <MessageContainer/>
                </div>
                
                {isPopupVisible && (
                        <div className='popup-overlay' onClick={handleCreateUserClick}>
                            <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                                <UsersPopup />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Home;
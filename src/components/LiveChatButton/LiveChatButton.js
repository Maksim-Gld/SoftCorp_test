import React from 'react';
import "./LiveChatButton.scss"
import icoLiveChat from '../../assets/ico_livechat.svg'

const LiveChatButton = () => {
    return (
        <div className='live-chat'>
            <a className='live-chat__button' href="#!">
                <span className='live-chat__text'>Live Chat</span>
                <img className='live-chat__ico' src={icoLiveChat} alt="Live Chat"/>
            </a>
        </div>
    );
};

export default LiveChatButton;
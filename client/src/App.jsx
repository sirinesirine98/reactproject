import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apikey = '9854j5qprqkg' ;

const authToken = cookies.get("token");

const client = StreamChat.getInstance(apikey);

if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}


const App = () => {
   

    if(!authToken) return <Auth />

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer 
                 
                />
                <ChannelContainer 
                    
                />
            </Chat>
        </div>
    );
}

export default App;
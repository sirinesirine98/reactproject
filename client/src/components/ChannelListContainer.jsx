import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import Cookies from 'universal-cookie';
import learn from '../assets/learn.gif'
import LogoutIcon from '../assets/logout.png'

const cookies = new Cookies();

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={learn} alt=" learn" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
      <p className="channel-list__header__text">University Pager</p>
  </div>
)

const ChannelListContainer = () => {
        return (
          <>
          <SideBar />
          <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList 
                filters={{}}
                channelRenderFilterFn={ () => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type="team"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview 
                    {...previewProps}
                    type="team"
                    
                    />

                )}
               
                />
                
                
             

                    
               </div>
               </>
        );
                
}
export default ChannelListContainer;
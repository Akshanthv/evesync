import React from "react";
import '../components/header.css';

export interface IAppTopBarProps {
    title: string;
    onProfileClick: (userId: number)=>void;
    onChatClick: (userId: number)=>void;
    onEventClick: (userId: number)=>void;
}

const AppTopBar = ({title,onProfileClick,onEventClick,onChatClick}:IAppTopBarProps) => {

    return(
        <div className="headerBar" >
            <div className="block" >
                <h1 onClick={()=>onEventClick(8)} className="head-title" >
                    {title}
                </h1>
            </div>
            <button type="button" onClick={()=>onChatClick(7)}>Chat</button>
            <button type="button" onClick={()=>onEventClick(16)}>Event</button>
            <button type="button" onClick={()=>onProfileClick(9)}>Profile</button>
        </div>
    )

}

export default AppTopBar ;
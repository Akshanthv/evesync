import React from "react";
import '../components/header.css';

export interface IAppTopBarProps {
    title: string;
    onSettingClick: (userId: number)=>void;
    onProfileClick: (userId: number)=>void;
    onChatClick: (userId: number)=>void;
    onEventClick: (userId: number)=>void;
    
}

const AppTopBar = ({title,onProfileClick,onEventClick,onChatClick,onSettingClick,}:IAppTopBarProps) => {

    return(
        <div className="headerBar" >
            <div className="block" >
                <h1 onClick={()=>onEventClick(8)} className="head-title" >
                    {title}
                </h1>
            </div>
            <button type="button" onClick={()=>onChatClick(101)}>Chat</button>
            <button type="button" onClick={()=>onEventClick(102)}>Event</button>
            <button type="button" onClick={()=>onProfileClick(103)}>Profile</button>
            <button type="button" onClick={()=>onSettingClick(104)}>Settings</button>
        </div>
    )

}

export default AppTopBar ;
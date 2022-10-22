import React from "react";
import ChatCard from "../components/chat.card.component";
import "../chat/chat.screen.css";
import ChatList from "../components/chat.list.card.component";
import { IChat } from "../entities/chat.entity";
import axios, { AxiosResponse } from "axios";

const Chat = () => {

    axios.get("http://localhost:8080/evesync/api/v1/users")
    .then((response: AxiosResponse<IChat[]>)=>{
    console.log((response.data))
    })

    return (
        <div className="chat-screen">
            <ChatList />
            <ChatCard />
        </div>
    )
}

export default Chat;
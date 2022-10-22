import axios, { AxiosResponse } from "axios";
import React from "react";
import { IChat } from "../entities/chat.entity";


const lof=() => {
    console.log("yooo")
}

const ChatCard = () => {


    return (
        <div>
            <div className="chat-box-header">
               
            </div>
            <div>
                <input type="text" onClick={lof} name="Chat Box" placeholder="Chat Box"></input>
            </div>
        </div>
    )

}

export default ChatCard;
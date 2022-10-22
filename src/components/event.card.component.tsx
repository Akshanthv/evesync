import axios, { Axios, AxiosResponse } from 'axios';
import React from 'react';
import '../components/event.card.css';
import { IEvent } from '../entities/event.entity';

export interface IEventCardProps {
    id: number;
    title: string;
    type: string;
    img: any;
    location: any;
    description: string;
}

// const getUserName = () => {
//     axios.get("http://localhost:8080/evesync/api/v1/event/{name}",{})
//     .then((response: AxiosResponse<String>)=>{
//         console.log((response.data))
//     })
// }

const EventCard = ({id,title,type,img,location,description}: IEventCardProps) => {

    axios.get("http://localhost:8080/evesync/api/v1/events")
    .then((response: AxiosResponse<IEvent[]>)=>{
    console.log((response.data))
    })  

    return (
        <div className='eventCard'>
            <h2 className='title'>
               {title}
            </h2>
            <img
                className='card-img'
                src={img}
                alt='avatar-img' 
            />
            <button >❤️</button>
            <button>🪧</button>
            <button>🔗</button>
            <div>
            <p className='location'>{location}</p>
            </div>
            <div>
                <p className='type'>{type}</p>
            </div>
            <div className='bottom'>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
}

export default EventCard;
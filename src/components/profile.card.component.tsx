import React from "react";
import '../components/profile.card.css';

export interface IProfileCardProps {
    id: number;
    name: string;
    img: string;
    description: string;
}

const ProfileCard = ({id,name,img,description}: IProfileCardProps) => {

    return (
        <div className='profilecard'>
            <h2 className='name'>
               {name}
            </h2>
            <img
                className='profile-card-img'
                src={img}
                alt='avatar-img' 
            />
            <div className='bottom'>
                <p className='description'>{description}</p>
            </div>
        </div>
    );
}

export default ProfileCard;
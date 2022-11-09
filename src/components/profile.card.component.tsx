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
             <img
                className='profile-card-img'
                src={img}
                alt='avatar-img' 
            />
            <h2 className='name'>
               {name}
            </h2>
            <p className='description'>{description}</p>

            <div className='b'>
                
            </div>
        </div>
    );
}

export default ProfileCard;
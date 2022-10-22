import React from 'react';
import ProfileCard from '../../components/profile.card.component';
import { IProfile } from '../../entities/profile.entity';
import profileItems from './profile.items';


const Profile = () => {

    return <React.Fragment>
        <span>Profile Screen</span>
        {

            profileItems.map((profile: IProfile, index: number) =>
                <ProfileCard
                    key={index}
                    id={profile.id}
                    name={profile.name}
                    img={profile.imgURL}
                    description={profile.bio}
                />)
        }
    </React.Fragment>
}

export default Profile;
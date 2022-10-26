import React, { useEffect } from 'react';
import ProfileCard from '../../components/profile.card.component';
import { IProfile } from '../../entities/profile.entity';
import profileItems from './profile.items';
import axios, { AxiosResponse } from 'axios';



const Profile = () => {

    const fetchProfile = () => {
        console.log("Fetch Profile")
        axios.get("http://localhost:8080/evesync/api/v1/users")
            .then((response: AxiosResponse<IProfile>) => {
                console.log("Events Data:::", response.data);
            })
    }

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
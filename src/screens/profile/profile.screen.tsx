import React, { useEffect } from 'react';
import ProfileCard from '../../components/profile.card.component';
import { IProfile } from '../../entities/profile.entity';
import profileItems from './profile.items';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import UserPostsCard from '../../components/post.card.component';
import '../profile/profile.screen.css';
import UserInfo from '../../components/info.card.component';
import UserTagged from '../../components/tagged.card.component';
import { PostAdd } from '@mui/icons-material';


const Profile = () => {

    const fetchProfile = () => {
        console.log("Fetch Profile")
        axios.get("http://localhost:8080/evesync/api/v1/users")
            .then((response: AxiosResponse<IProfile>) => {
                console.log("Events Data:::", response.data);
            })
            // if (response.data){
            //     navigate('/posts')
            // }
    }

    const onPostsClick = () => {
        return(
            <UserPostsCard />
        )
    }

    const onTaggedClick = () => {
        return(
            <UserTagged />
        )
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

        <div className='profileBar'>
            <button id='posts' onClick={()=>onPostsClick()}>Posts</button>
            <button id='tagged' onClick={()=>onTaggedClick()}>Tagged</button>
            <button id='info' >Info</button>
        </div>

        {/* <div className='profile_tabs'>
            {<UserPostsCard />}
        </div> */}
    </React.Fragment>
}

export default Profile;

function onPostsClick(arg0: number): void {
    ;
}
function onTaggedClick(arg0: number): void {
    throw new Error('Function not implemented.');
}


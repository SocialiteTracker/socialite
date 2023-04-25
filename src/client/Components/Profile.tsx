import React from 'react'
import { useState, useEffect } from 'react';

import AddSocials from './AddSocials'
import ShowSocials from './ShowSocials';
import Header from './Header';
import { socialState, databaseResponse } from '../../types'

//Giles
//to test the frontend
//this will be removed and initial social state will be pulled from db on login auth
const dummyData = [
    {
        socialMedia: "LinkedIn",
        url: "https://www.linkedin.com/asd123dnaskj"
    },
    {
        socialMedia: "Instagram",
        url: "https://www.instagram.com/knakwjasd"
    }
]

function Profile(){

    //main state array keeping track links user has added
    const [socials,setSocials] = useState<socialState[]>(dummyData);

    //updates current state to show new social media
    //adds new social media to database
    function addSocialMedia(newState: socialState[]){
        setSocials(newState);
        //TODO - add new social media to database
        //TODO - generate new QR code
        
    }

    useEffect(()=>{
        console.log("getting socialMedia")
        fetch('/api/getAllSocials')
        .then(data=>data.json())
        .then(data=>{
            //map the data from database format to frontend format
            const newSocialsState = data.map((el: databaseResponse)=>{
                return {
                    socialMedia: el.social_name,
                    url: el.social_value
                }
            })
            setSocials(newSocialsState);
        });
    },[])
    
    return (
        <div>
            <Header />
            <ShowSocials socials={socials}/>
            <AddSocials socials={socials} addNewSocialMediaToState={addSocialMedia} />
        </div>
    )
}

export default Profile;
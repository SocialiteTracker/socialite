import React from 'react'
import { useState } from 'react';

import AddSocials from './AddSocials'
import QRCode from './QRCode';

import { socialState } from '../../types'

//Giles
//to test the frontend
//this will be removed and initial socials state can be pulled from db on login auth
const dummyData = [
    {
        socialMedia: "LinkedIn",
        url: "https://www.linkedin.com/asd123dnaskj"
    },
    {
        socialMedia: "Instagram",
        url: "https://www.instagram.com/knakwjasd"
    },
    {
        socialMedia: "Twitter",
        url: "https://www.twitter.com/aasda1gewadw"
    },
    {
        socialMedia: "Facebook",
        url: "https://www.facebook.com/aswmmo2929"
    }
]

function Profile(){

    //updates current state to show new social media
    //adds new social media to database
    //generates new QR code 
    function addSocialMedia(newState: socialState[]){
        setSocials(newState);

        //TODO - add new social media to database
        //TODO - generate new QR code
    }

    const [socials,setSocials] = useState<socialState[]>(dummyData); //stored array
    console.log("generating profile");
    return (
        <div>
            <p className="text-4xl text-center font-medium mt-4 mb-10"> Socials: </p>
            {socials.map((social)=>
                <div className="my-5">
                    <p className="block text-2xl text-black text-center my-10">{social.socialMedia}: <a href={social.url} className="text-blue-800">{social.url}</a></p>
                </div>
            )}
            <AddSocials socials={socials} addNewSocialMediaToState={addSocialMedia} />
            <QRCode />
        </div>
    )
}

export default Profile;
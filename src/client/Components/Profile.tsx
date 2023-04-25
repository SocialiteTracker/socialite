import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

import AddSocials from './AddSocials'
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
            <div className="flex justify-center mb-10 mt-4" > 
                <p className="text-4xl font-medium"> Socials </p>
                <Link to="/shareprofile" className="ml-5"> 
                    <img src="http://cdn.onlinewebfonts.com/svg/img_523454.png" className="w-10"></img>
                </Link>
            </div>
            {socials.map((social)=>
                <div className="my-5">
                    <p className="block text-2xl text-black text-center my-10">{social.socialMedia}: <a href={social.url} className="text-blue-800">{social.url}</a></p>
                </div>
            )}
            <AddSocials socials={socials} addNewSocialMediaToState={addSocialMedia} />
        </div>
    )
}

export default Profile;
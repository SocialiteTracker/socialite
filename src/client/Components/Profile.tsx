import React from 'react'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import AddSocials from './AddSocials'
import ShowSocials from './ShowSocials';
import Header from './Header';
import { socialState, dbResponse } from '../../types'

//Giles
//to test the frontend
//this will be removed and initial social state will be pulled from db on login auth
const dummyData = [
    // {
    //     socialMedia: "LinkedIn",
    //     url: "https://www.linkedin.com/asd123dnaskj"
    // },
    // {
    //     socialMedia: "Instagram",
    //     url: "https://www.instagram.com/knakwjasd"
    // }
]

function Profile(){

    //main state array keeping track links user has added
    const [socials,setSocials] = useState<socialState[]>([]);

    //updates current state to show new social media
    //adds new social media to database
    function addSocialMedia(newSocialsState: socialState[],socialMedia: string,url: string){

        //remove duplicates 
        setSocials(newSocialsState);
        //TODO - add new social media to database
        fetch('/api/socialMedia', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                social_name: socialMedia,
                social_value: url
            })
        });
    }

    function deleteSocialMedia(socialMedia: string){

        //update state
        const newSocialsState = socials.slice(0); //make shallow copy of state
        newSocialsState.forEach((el,index)=>{ //slice out element with matching socialMedia 
            if(el.socialMedia === socialMedia){
                newSocialsState.splice(index,1);
            }
        });
        setSocials(newSocialsState);

        //make db call
        fetch('/api/socialMedia', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                social_name: socialMedia
            })
        });
    }

    useEffect(()=>{
        //check to see if user has a cookie
        if(!Cookies.get('userId')){
            location.replace("/");
        }
        else{
            fetch('/api/getAllSocials')
            .then(data=>data.json())
            .then(data=>{
                const newSocialState = data.map((el: dbResponse)=>{
                    return {
                        socialMedia: el.social_name,
                        url: el.social_value
                    }
                })
                setSocials(newSocialState);
            });
        }
    },[])
    
    return (
        <div>
            <Header />
            <ShowSocials socials={socials}  deleteSocialMedia={deleteSocialMedia}/>
            <AddSocials socials={socials} addNewSocialMediaToState={addSocialMedia} />
        </div>
    )
}

export default Profile;
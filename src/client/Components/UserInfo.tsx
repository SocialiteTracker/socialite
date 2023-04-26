import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import ShowSocials from './ShowSocials';

import { socialState, dbResponse } from '../../types'

function UserInfo(){

    const [socials,setSocials] = useState<socialState[]>([]);
    const { userId } = useParams<{ userId: string }>();

    //Make database call here to get links from user by attaching username to body of post request
    //use the result of this database call to invoke setSocials and update state
    //Giles
    function getUserLinks(){
 
        console.log("getting user links");
        console.log(userId);

        fetch('/api/getUserProfile', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                userId: userId
            })
        })  
        .then(data=>data.json())
        .then(data=>{
            console.log(data);
            const newSocialState = data.map((el: dbResponse)=>{
                return {
                    socialMedia: el.social_name,
                    url: el.social_value
                }
            })
            setSocials(newSocialState);
        });
    }

    //when the component mounts invoke getUserLinks
    useEffect(()=>{
        getUserLinks();
    },[])

    return (
        <div>
            <h1 className="text-4xl"> Getting links for {userId}... </h1>
            <ShowSocials socials={socials} presentation={true}/>
        </div>
    )
}

export default UserInfo;
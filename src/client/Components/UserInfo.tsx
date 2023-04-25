import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ShowSocials from './ShowSocials';

import { socialState } from '../../types'

function UserInfo(){

    const [socials,setSocials] = useState<socialState[]>([]);
    const { username } = useParams<{ username: string }>();

    //Make database call here to get links from user by attaching username to body of post request
    //use the result of this database call to invoke setSocials and update state
    //Giles
    function getUserLinks(){
    }

    //when the component mounts invoke getUserLinks
    useEffect(()=>{
        getUserLinks();
    })

    return (
        <div>
            <h1 className="text-4xl"> Getting links for {username}... </h1>
            <ShowSocials socials={socials}/>
        </div>
    )
}

export default UserInfo;
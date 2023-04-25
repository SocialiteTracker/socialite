import React from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";

function UserInfo(){

    const { username } = useParams<{ username: string }>();

    //Make database call here to get info about user
    //Giles
    function getUserLinks(){
    }

    //when the component mounts invoke getUserLinks
    useEffect(()=>{
        getUserLinks();
    })

    return (
        <h1 className="text-4xl"> Getting links for {username}... </h1>
    )
}

export default UserInfo;
import React from 'react'
import { useParams } from "react-router-dom";

function UserInfo(){

    const { username } = useParams<{ username: string }>();

    return (
        <h1> Getting links for: {username} </h1>
    )
}

export default UserInfo;
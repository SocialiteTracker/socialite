import React from 'react';
import QRCode from './QRCode';

function ShareProfile(){
    return (
        <>
            <p className="text-4xl text-center font-medium mt-4 mb-10"> Username's Links </p>
            <QRCode targetUrl={"https://www.deployed.com/userinfo/"}/>
        </>
    )
}

export default ShareProfile;
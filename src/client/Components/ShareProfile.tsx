import React from 'react';
import QRCode from './QRCode';
import Cookies from 'js-cookie';

function ShareProfile(){
    return (
        <>
            <p className="text-4xl text-center font-medium mt-4 mb-10"> Username's Links </p>
            <QRCode targetUrl={`localhost:3000/userinfo/${Cookies.get('userId')}`}/> {/* change to deployed url later*/}
        </>
    )
}

export default ShareProfile;
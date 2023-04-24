import React from 'react'
import QR from "react-qr-code";

function QRCode(){
    return (
        <div className="flex justify-center mt-3">
            <QR value="/signup" />
        </div>
    )
}

export default QRCode;
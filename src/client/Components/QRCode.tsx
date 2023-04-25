import React from 'react'
import QR from "react-qr-code";

interface QRCodeProps {
    targetUrl: string
}

function QRCode(props: QRCodeProps){
    return (
        <div className="flex justify-center mt-3">
            <QR value={props.targetUrl} />
        </div>
    )
}

export default QRCode;
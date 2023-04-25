import React from 'react'
import { socialState } from '../../types'

//displays links 
function ShowSocials(props: {socials: socialState[]}){
    return (
        <>
            {props.socials.map((social: socialState)=>
                <div className="my-5">
                    <p className="block sm:text-2xl text-xl text-black text-center my-10">{social.socialMedia}: <a href={social.url} className="text-blue-800">{social.url}</a></p>
                </div>
            )}
        </>
    )
}

export default ShowSocials;
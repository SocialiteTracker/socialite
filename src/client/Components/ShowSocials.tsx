import React from 'react'
import { socialState } from '../../types'

interface showSocialsProps {
    socials: socialState[],
    deleteSocialMedia?: (socialMedia: string) => void
}

//displays links 
function ShowSocials(props: showSocialsProps) {
    return (
        <>
            {props.socials.map((social: socialState) =>
                <div className="my-5">
                    <p className="block sm:text-2xl text-xl text-darkpurple text-center my-10">
                        {social.socialMedia}:
                        <a href={social.url} className="text-magenta"> {social.url}</a>
                        <button type="submit" className="bg-pink ml-[30px] text-white text-xl mt-10 hover:opacity-60 cursor-pointer w-7 h-7 rounded-md" onClick={() => { if (props.deleteSocialMedia) { props.deleteSocialMedia(social.socialMedia) } }}>x</button> </p>
                </div>
            )}
        </>
    )
}

export default ShowSocials;
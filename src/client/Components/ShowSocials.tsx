import React from 'react'
import { socialState } from '../../types'

interface showSocialsProps {
    socials: socialState[],
    deleteSocialMedia?: (socialMedia: string)=>void 
}

//displays links 
function ShowSocials(props: showSocialsProps){
    return (
        <>
            {props.socials.map((social: socialState)=>
                <div className="my-5">
                    <p className="block sm:text-2xl text-xl text-black text-center my-10">{social.socialMedia}: <a href={social.url} className="text-blue-800">{social.url}</a> <button type="submit" className="bg-red-800 ml-[30px] text-white text-xl mt-10 hover:opacity-60 cursor-pointer w-[11%] rounded-md" onClick={()=>{if(props.deleteSocialMedia){props.deleteSocialMedia(social.socialMedia)}}}>Delete</button> </p>
                </div>
            )}
        </>
    )
}

export default ShowSocials;
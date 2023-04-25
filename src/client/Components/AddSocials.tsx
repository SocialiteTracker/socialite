import React from 'react'
import { useState } from 'react';
import { socialState } from '../../types'


interface addSocialsProps {
    socials: socialState[],
    addNewSocialMediaToState: (newSocialsState: socialState[])=>void
}

function AddSocials(props: addSocialsProps){

    const [newSocialMedia,setNewSocialMedia] = useState("");
    const [newUrl,setNewUrl] = useState("");

    return (
        <>
            <div className="flex justify-center">
                <input placeholder="Social Media Name" className="inline-block mx-3 pl-4 py-4 mb-6 w-[30%] border border-gray-300 box-border rounded-lg" onChange={e => setNewSocialMedia(e.target.value)} required/>
                <input placeholder="URL" className="inline-block mx-3 px-2 py-4 mb-6 w-[50%] border border-gray-300 box-border rounded-lg" onChange={e => setNewUrl(e.target.value)} required/>
            </div>
            <div className="flex justify-center"> 
                <button type="submit" className="bg-[#1f61a7] text-white text-xl mt-3 mb-7 py-5 hover:opacity-60 cursor-pointer w-[15%] rounded-md" onClick={()=>props.addNewSocialMediaToState([...props.socials,{
                    socialMedia: newSocialMedia,
                    url: newUrl
                }])}>Add Social</button>
            </div>
            
        </>
    )
}

export default AddSocials;
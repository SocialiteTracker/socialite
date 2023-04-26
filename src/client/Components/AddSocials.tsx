import React from 'react'
import { useState } from 'react';
import { socialState } from '../../types'


interface addSocialsProps {
    socials: socialState[],
    addNewSocialMediaToState: (newSocialsState: socialState[], socialMedia: string, url: string)=>void
}

function AddSocials(props: addSocialsProps){

    const [newSocialMedia,setNewSocialMedia] = useState("");
    const [newUrl,setNewUrl] = useState("");

    return (
        <>
            <div className="flex justify-center">
                <input placeholder="Social Media Name" className="inline-block mx-3 sm:pl-4 pl-3 py-4 mb-6 w-[45%] border border-gray-300 box-border rounded-lg" onChange={e => setNewSocialMedia(e.target.value)} required/>
                <input placeholder="URL" className="inline-block mx-3 sm:pl-4 pl-3 px-2 py-4 mb-6 w-[45%] border border-gray-300 box-border rounded-lg" onChange={e => setNewUrl(e.target.value)} required/>
            </div>
            <div className="flex justify-center"> 
                <button type="submit" className="bg-[#1f61a7] text-white text-xl mt-3 mb-7 py-5 hover:opacity-60 cursor-pointer sm:w-[15%] w-[30%] rounded-md" onClick={()=> {
                    if(newSocialMedia.length > 0 && newUrl.length > 0){

                        //Check for duplicates - if they exist exist 
                        const newSocialsState = props.socials.slice();
                        let duplicates = false;
                        newSocialsState.forEach((el)=>{
                            if(el.socialMedia === newSocialMedia) el.url = newUrl;
                            duplicates = true;
                        });
                        if(duplicates){
                            props.addNewSocialMediaToState([...newSocialsState],newSocialMedia,newUrl);
                            return;
                        }

                        //duplicate does not exist
                        props.addNewSocialMediaToState([...props.socials,{
                            socialMedia: newSocialMedia,
                            url: newUrl
                        }],newSocialMedia,newUrl);
                    }
                    }
                }>Add Social</button>
            </div>
            
        </>
    )
}

export default AddSocials;
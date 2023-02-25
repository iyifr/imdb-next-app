import React from "react" ;
import { FaTwitter , FaInstagram , FaFacebookF, FaYoutube, FaExternalLinkAlt} from 'react-icons/fa'
import {SiTiktok} from 'react-icons/si'

const Footer = () => {
    return <>
    <div className = "bg-black w-full m-0 mt-5 p-5">
        <div className="mx-auto container max-w-xl p-2">
            <div className = "mx-auto text-center flex flex-row justify-center space-x-10">
                <FaTwitter className="text-white cursor-pointer text-3xl"/>
                <SiTiktok className="text-white cursor-pointer text-2xl"/>
                <FaFacebookF className="text-white cursor-pointer text-2xl"/>
                <FaYoutube className="text-white cursor-pointer text-2xl"/>
                <FaInstagram className="text-white cursor-pointer text-2xl"/>
            </div>
            <div className="mt-4 w-[70%] mx-auto flex flex-wrap text-white text-bold text-xl">
                <p>Help me please</p>
                <p>Help me please</p>
                <p>Help me please</p>
            </div>
        </div>
    </div>
    </>
}

export default Footer
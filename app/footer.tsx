import React from "react" ;
import { FaTwitter , FaInstagram , FaFacebookF, FaYoutube, FaExternalLinkAlt, FaRegCopyright} from 'react-icons/fa'
import {SiTiktok} from 'react-icons/si'

const Footer = () => {
    return <>
    <div className = "bg-gradient-to-t from-black to-[#121212] w-full m-0 mt-5 p-5 fixed left-0 bottom-0">
                            {/* Social media icons*/}
    <div className="mx-auto container max-w-xl p-2">
        <div className = "mx-auto text-center flex flex-row justify-center space-x-6 lg:space-x-10">
            <SiTiktok className="text-white cursor-pointer text-md lg:text-2xl"/>
            <FaInstagram className="text-white cursor-pointer text-md lg:text-2xl"/>
            <FaTwitter className="text-white cursor-pointer text-md lg:text-2xl hover:text-blue-400"/>
            <FaYoutube className="text-white cursor-pointer text-md lg:text-2xl hover:text-red-500"/>
            <FaFacebookF className="text-white cursor-pointer text-md lg:text-2xl hover:text-blue-500"/>
        </div>

                        {/* Links section of the footer */}
        <div className="mt-4 w-[90%] mx-auto flex justify-center flex-wrap space-y-3 text-white font-semibold text-sm lg:text-lg space-x-3 lg:space-x-5" >
            <p className= "mt-3 cursor-pointer">Get the IMDb app <FaExternalLinkAlt className="inline ml-1 mb-1 text-sm"/></p>
            <p className = "cursor-pointer hover:text-amber-200">Help <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1"/></p>
            <p className = "cursor-pointer hover:text-amber-200">Site Index <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1"/></p>
            <p className = "cursor-pointer hover:text-amber-200">IMDb pro <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1" /></p> 
            <p className = "cursor-pointer hover:text-amber-200">Box Office Mojo <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1"/></p>
            <p className = "cursor-pointer hover:text-amber-200">IMDb developer <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1"/></p> 
            <p className = "cursor-pointer hover:text-amber-200">Press Room</p>
            <p className = "cursor-pointer hover:text-amber-200">Advertising <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1"/></p> 
            <p className = "cursor-pointer hover:text-amber-200">Jobs <FaExternalLinkAlt className="inline mb-1 text-xs lg:text-sm ml-1" /></p> 
            <p className = "cursor-pointer hover:text-amber-200">Conditions of Use</p>
            <p className = "cursor-pointer hover:text-amber-200">Privacy Policy</p> 
            <p className = "cursor-pointer hover:text-amber-200">Your Ads & Privacy Choices</p>
        </div>

        <div className = "flex mx-auto justify-center mt-5">
            <p className="text-xs font-semibold  text-slate-500 font-bold">
            <FaRegCopyright className="inline text-xs" /> 1999 - {new Date().getFullYear()} by IMdb.com, Inc</p>
        </div>
    </div>
    </div>
    </>
}

export default Footer
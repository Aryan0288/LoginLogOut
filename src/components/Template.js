import React from 'react'
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import { FcGoogle } from "react-icons/fc";

export const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className='flex gap-[12rem] w-11/12 max-w-[1160px] mx-auto pb-8'>
            <div className='flex flex-col gap-4'>
                {formtype === "signup" ? (<h1 className='text-[2rem] font-semibold max-w-[450px]'>Join the millions learning to code with StudyNotion for free</h1>) : (<h1 className='text-[2rem] font-bold'>{title}</h1>)}
                {/* <h1 className='text-[2rem] font-bold'>{title}</h1> */}
                <p className='flex flex-col  text-[19px] font-[400] opacity-75'>
                    <span>{desc1}</span>
                    <span className='text-sky-400 italic'>{desc2}</span>
                </p>
                {formtype === "signup" ? (<SignUp setIsLoggedIn={setIsLoggedIn} />) : (<Login setIsLoggedIn={setIsLoggedIn} />)}



                <div className='flex flex-row gap-2 items-center'>
                    <div className='bg-gray-500 h-[1px] w-full'></div>
                    <div>OR</div>
                    <div className='bg-gray-500 h-[1px] w-full'></div>
                </div>

                <button className='text-center w-full bg-transparent outline outline-[0.1px] outline-gray-400 font-700 py-2 rounded-lg flex items-center justify-center gap-2 text-[17px]'><FcGoogle /><p> SignIn With Google</p></button>
            </div>
            <div className='relative'>
                <img className='relative top-6 left-8' src={image} alt='Pattern' width={550} height={504} loading='lazy' />
                <img className='absolute top-0 border-[10]' src={image} alt='Pattern' width={550} height={490} loading='lazy' />
            </div>
        </div>
    )
}

export default Template;

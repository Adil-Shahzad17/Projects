import React from 'react'
import about from "../Assets/about.jpg"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='w-full h-auto bg-[#606c38]/85 text-white py-[100px] flex flex-col justify-center items-center sm:items-start sm:pl-10 sm:h-auto lg:items-center' >
            <h1 className='font-bold uppercase text-4xl mb-8 sm:text-5xl'>About Us</h1>

            <div className='flex flex-col justify-center items-center sm:items-start lg:flex-row lg:gap-[30px]'>
                <img src={about} alt="TeamWork" className='min-w-[300px] w-[300px] h-auto rounded-lg shadow-lg shadow-black sm:w-[400px] md:w-[450px]' />

                <p className='mt-8 text-center px-3 text-lg sm:px-0 sm:text-left sm:w-[500px] lg:w-[400px] lg:border-r-4 lg:border-r-white'>Welcome to Raptor, a creative heaven for photographers, designers, and anyone seeking high-quality visuals! Our platform offers a vast library of free, stunning images and videos to bring your creative projects to life. <br /> <br /> Powered by the Pexels API, we ensure a seamless browsing experience with access to a diverse range of professional-grade media.
                    <br />
                    <Link to='https://www.pexels.com/' target='default' className='hover:cursor-pointer text-xl text-yellow-300'>
                        Visit Pexels
                    </Link>
                </p>


            </div>
        </div>
    )
}

export default About
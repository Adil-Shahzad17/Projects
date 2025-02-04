import React from 'react'
import { Button } from "../Components/index"
import { ReactTyped } from "react-typed"
import GuestImage from "../Assets/GuestImage.jpg"
import { Link } from 'react-router-dom'

const Guest_Page = () => {
    return (
        <section className='w-full bg-cover bg-center ' style={{ height: "100%", backgroundImage: `url(${GuestImage})` }}>

            <div className='h-full w-full bg-[#000]/85 flex flex-col justify-center items-center gap-3 md:items-start md:pl-24 lg:pl-32 xl:p-42' >
                <h1 className='text-2xl font-bold text-[#52b788] sm:text-4xl md:text-5xl lg:text-[55px]'>Say Hello To The World!</h1>
                <ReactTyped strings={[
                    "Natue",
                    "Abstract",
                    "Love",
                    "Mountains",
                    "Oceans",
                    "Technology",
                    "Lifestyle",
                    "Travel",
                    "Business"
                ]} className='text-xl font-bold sm:text-2xl md:text-3xl md:mt-2 lg:text-4xl'
                    typeSpeed={100}
                    backSpeed={180}
                    loop />

                <div className='w-[80%] max-w-[600px] md:mt-4 md:text-lg'>
                    <p className='text-center md:leading-8 md:text-start'>
                        Once upon a time, in a world of wonder and mystery,
                        In the heart of the mountains, where dreams begin to soar,
                        Beyond the horizon, a journey unfolds unlike any other.
                    </p>
                </div>
                <Link to='/sign_up'>
                    <Button text="Sign up for Free" className='p-3 px-7 bg-button-color rounded-full text-[#000] hover:text-white md:mt-4 md:px-10 md:text-xl' />
                </Link>
            </div>
        </section>
    )
}

export default Guest_Page
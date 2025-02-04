import React from 'react'
import bone from "../Assets/bone.png"

const Footer = () => {
    return (
        <>
            <p className='flex justify-center w-full mt-3'>All the contents in footer are of no use.</p>

            <div
                className="w-full max-w-[1150px] mx-auto h-[60%] grid grid-cols-1 grid-rows-[1.5fr_2.5fr] relative md:h-[40%] lg:h-1/2 md:grid-rows-1 md:grid-cols-[250px_2.5fr]"
            >
                <div
                    className="flex justify-center items-center gap-2 sm:border-b sm:border-b-gray-900
                 relative after:content-[''] after:absolute after:top-1/2 after:right-0 after:h-1/2 after:w-[1px] after:bg-white after:transform after:-translate-y-1/2
                 md:flex-col md:items-start md:px-5 md:border-b-0"
                >
                    <img
                        src={bone}
                        alt="Raptor"
                        className="w-[55px] sm:w-[65px] h-auto bg-white rounded-lg"
                    />
                    <h1 className="text-xl sm:text-2xl sm:font-bold text-center md:text-left">
                        Say Hello To The World
                    </h1>
                </div>
                <div className='grid grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-4'>
                    <ul className='grid place-content-center gap-1 border-b border-b-gray-900 sm:border-b-0'>
                        <li>Weekly Themes</li>
                        <li>Pre-Sale FAQs</li>
                        <li>Submit a Ticket</li>
                    </ul>

                    <ul className='grid place-content-center gap-1 border-b border-b-gray-900 sm:border-b-0'>
                        <li>Services</li>
                        <li>Theme Week</li>
                        <li>Resources</li>
                    </ul>

                    <ul className=' grid place-content-center gap-1'>
                        <li>Showcase</li>
                        <li>Widget Hut</li>
                        <li>Support</li>
                    </ul>

                    <ul className='grid place-content-center gap-1'>
                        <li>About Us</li>
                        <li>Contact US</li>
                        <li>Affiliates</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer
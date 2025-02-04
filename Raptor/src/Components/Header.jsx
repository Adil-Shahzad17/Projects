import React, { useState } from 'react'
import { X, Menu } from "lucide-react"
import BoneRaptor from "../Assets/bone.png"
import { LogoutBtn } from "../Components/index"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    const [nav, setNav] = useState(false);
    const navigate = useNavigate()
    const auth = useSelector((state) => state.pexels.status)

    const handleNav = () => setNav(!nav);

    const raptorlogoHandle = () => {
        if (auth) {
            navigate('/home')
        } else {
            navigate('/guestPage')
        }
    }

    return (
        <nav className='w-full max-w-[1700px] mx-auto h-[75px] bg-white fixed flex justify-between border-b border-b-[#000300] z-50'>
            <div className="h-full w-[100px]  grid place-content-center">
                <img src={BoneRaptor} alt="Raptor" className='w-[55px] h-auto sm:w-[65px] md:w-[75px] lg:w-[95px] 
                xl:w-[105px] lg:pl-5 hover:cursor-pointer'
                    onClick={raptorlogoHandle} />
            </div>


            <ul className='gap-10 hidden sm:flex flex-row items-center justify-center h-full pr-4 text-black'>

                {
                    auth && <NavLink to='/home' className={({ isActive }) => `py-2 px-4 rounded-2xl font-sans font-normal text-md outline-none hover:bg-black hover:text-white ${isActive ? "bg-button-color text-white" : "bg-white"}`}>
                        Home
                    </NavLink>
                }

                {
                    auth && <NavLink to='/about' className={({ isActive }) => `py-2 px-4 rounded-2xl font-sans font-normal text-md outline-none hover:bg-black hover:text-white ${isActive ? "bg-button-color text-white" : "bg-white"}`}>
                        About
                    </NavLink>

                }

                {
                    auth && <NavLink to='/contact' className={({ isActive }) => `py-2 px-4 rounded-2xl font-sans font-normal text-md outline-none hover:bg-black hover:text-white ${isActive ? "bg-button-color text-white" : "bg-white"}`}>
                        Contact
                    </NavLink>
                }

                {
                    !auth && <Link to='/sign_in' className='px-4 py-2 bg-button-color rounded-2xl text-white 
                    font-sans font-normal text-md outline-none hover:bg-black'>
                        <p>Sign in</p>
                    </Link>
                }

                {
                    !auth && <Link to='/sign_up' className='px-4 py-2 bg-button-color rounded-2xl text-white 
                    font-sans font-normal text-md outline-none hover:bg-black'>
                        <p>Sign Up</p>
                    </Link>
                }

                {
                    auth && <LogoutBtn text="LogOut" />
                }

            </ul>

            <div onClick={handleNav} className='text-black grid place-content-center px-4 sm:hidden'>
                {!nav ?
                    <Menu size={26} /> : <X size={26} />
                }
            </div>


            <ul className={nav ? 'fixed left-0 top-[75px] w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-1000 fixed left-[-100%] top-[75px]'}>
                <li className='p-5 border-b border-b-gray-900 '>Home</li>
                <li className='p-5 border-b border-b-gray-900 '>About</li>
                <li className='p-5 border-b border-b-gray-900 '>Contact</li>
                <LogoutBtn className='px-8 mt-5 ml-5' text="LogOut" />
            </ul>

        </nav>
    )
}

export default Header
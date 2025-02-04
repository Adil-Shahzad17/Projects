import React, { useState } from 'react'
import authservice from "../Appwrite/auth"
import { logout } from "../Store/PexelSlice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Bars } from 'react-loading-icons'

const LogoutBtn = ({
    className,
    text
}) => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutUser = () => {
        setLoading(true);

        authservice.logOut().then(() => {
            dispatch(logout())
            navigate('/guestPage')
            setLoading(false)
        })
            .catch(() => console.log("Unable to LogOut user"))
            .finally(() => setLoading(false))
    };


    return (
        <>
            <button type="submit" className={`${className} px-4 py-2 bg-button-color rounded-2xl text-white 
        font-sans font-normal text-md outline-none hover:bg-black`}
                onClick={logoutUser}>
                {
                    !loading ? text : <Bars speed={.50} height="20px" width="20px" />
                }

            </button>

        </>
    )
}

export default LogoutBtn
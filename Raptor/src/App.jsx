import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from "./Components/index"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authservice from './Appwrite/auth'
import { login, logout } from "./Store/PexelSlice"

const App = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        authservice.getCurrentUser()
            .then((userdata) => {
                if (userdata) {
                    dispatch(login({ userData: userdata }))
                    navigate('/home')
                }
                else {
                    dispatch(logout())
                    navigate('/guestPage')
                }
            })
    }, [])

    return (
        <div className='bg-black w-full max-w-[1700px] mx-auto h-full'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App
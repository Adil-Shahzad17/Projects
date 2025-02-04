import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Input, Button } from "./index"
import { useForm } from 'react-hook-form'
import authservice from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from '../Store/PexelSlice'
import { Bars } from 'react-loading-icons'

const Sign_in = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onsubmit = async (data) => {
        setLoading(true)
        setError('')
        try {
            const loginUser = await authservice.login(data)
            if (loginUser) {
                dispatch(login(data))
                navigate('/home')
            }
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)}
            className='bg-white w-1/4 h-[400px] rounded-lg flex flex-col px-2 text-[#6b705c] min-w-[300px] max-w-[500px]'>
            <p className='text-black font-medium text-3xl p-7'>
                Sign In
            </p>

            {error && (
                <p className="text-red-500 text-sm px-3">{error}</p>
            )}

            {errors.email && (
                <p className="text-red-500 text-sm px-3">{errors.email.message}</p>
            )}

            {errors.password && (
                <p className="text-red-500 text-sm px-3">{errors.password.message}</p>
            )}

            <div className='w-full mt-4 px-3'>
                <Input label="Email"
                    className="w-full flex mt-2 border rounded-md border-gray-500 pl-2 p-2 outline-none" placeholder="Enter Your Email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                    })} />
            </div>

            <div className='w-full mt-4 px-3'>
                <Input label="Password"
                    className="w-full flex mt-2 border rounded-md border-gray-500 pl-2 p-2 outline-none" placeholder="Enter Your Password"
                    {...register("password", {
                        required: true,
                        validate: {
                            minLength: (value) =>
                                value.length >= 8 || "Password must be at least 8 characters long",
                            hasNumber: (value) =>
                                /\d/.test(value) || "Password must contain at least one number",
                            hasCharacter: (value) =>
                                /[a-zA-Z]/.test(value) || "Password must contain at least one letter",
                        },
                    })} />
            </div>

            <Button type="submit" text="Sign In"
                className='w-[95%] h-10 mt-4 px-3 mx-auto' />

            <p className='mt-4'>
                Don't have an account <Link to='/sign_up' className='underline font-bold hover:cursor-pointer text-black px-3'>Sign Up</Link>
            </p>

            {
                loading && <Bars speed={.50} height="30px" width="30px" className='bg-black rounded-xl w-auto' />
            }

        </form>
    )
}

export default Sign_in
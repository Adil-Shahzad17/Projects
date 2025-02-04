import React, { useRef, useState } from 'react'
import contactimage from "../Assets/contactimage.jpg"
import { Button, Input } from "../Components/index"
import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser';
import config from '../Appwrite/config';
import { Bars } from 'react-loading-icons';

const Contact = () => {

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const userInfo = useSelector((state) => state.pexels.userData)
    const ref = useRef()


    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true);

        if (ref.current.value) {

            const templateParams = {
                from_name: userInfo.name,
                reply_to: userInfo.email,
                message: ref.current.value,
                to_name: "Adil"
            };

            emailjs
                .send(
                    config.EMAIL_JS_SERVICE_ID,
                    config.EMAIL_JS_TEMPLATE_ID,
                    templateParams,
                    config.EMAIL_JS_PUBLIC_KEY)
                .then(
                    () => {
                        setMessage('Email Sent Successfully')
                    },
                    (error) => {
                        setMessage("You didn't logged in with a valid email, Failed to send the message")
                        alert('Failed to send the message.');
                    }
                ).finally(() => setLoading(false))
        } else {
            setMessage("Message Can't Be Empty")
        }
    }

    return (

        <div className='w-full h-full bg-cover'
            style={{ backgroundImage: `url(${contactimage})`, backgroundPosition: "center 5%" }}>

            <div className='w-full h-full bg-black/85 pt-[75px] flex flex-col justify-center items-center
            lg:flex-row lg:gap-20'>

                <div className='w-auto h-auto flex flex-col gap-5 justify-center items-centers'>
                    <p className='text-white text-3xl sm:text-5xl font-bold'>
                        Contact Us<span className='text-button-color text-7xl'>.</span>
                    </p>

                    {
                        message && <p>{message}</p>
                    }
                </div>

                <form action="#" className='bg-[#343a40] w-[90%] min-w-[300px] max-w-[500px] mt-5 rounded-lg p-2 flex flex-col gap-4'>
                    <Input label="Name" type="text" placeholder="Name"
                        disabled defaultValue={userInfo?.name || ''}
                        className="w-[95%] p-3 bg-transparent text-white outline-none focus:border-b focus:border-b-[#3c6e71]" />

                    <Input label="Email" type="email" placeholder="Email"
                        defaultValue={userInfo?.email || ''}
                        className="w-[95%] p-3 bg-transparent text-white outline-none focus:border-b focus:border-b-[#3c6e71]" />

                    <Input
                        label="Message"
                        placeholder="Enter your message..."
                        className="w-[95%] pl-3 h-32 bg-transparent text-white overflow-auto outline-none focus:border-b focus:border-b-[#3c6e71] resize-none"
                        ref={ref}
                    />


                    <Button type="submit" text="SEND MESSAGE" className='w-[200px] py-3 rounded-3xl mx-auto'
                        onClick={sendEmail} />

                    {
                        loading && <Bars speed={.50} height="20px" width="20px" className='mx-auto' />
                    }

                </form>
            </div>

        </div>
    );
}

export default Contact
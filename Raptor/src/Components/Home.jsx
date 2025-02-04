import React, { useState, useEffect, useRef } from 'react'
import homebg from "../Assets/homebg.jpg"
import { Photos } from "../Components/index"
import { ScanSearch } from 'lucide-react'
import pexels from '../Pexels/Pexels'
import { Bars } from 'react-loading-icons'

const Home = () => {

    const [errors, setErrors] = useState("")
    const [images, setImages] = useState({})
    const [loading, setLoading] = useState(false)
    const ref = useRef(null)


    useEffect(() => {
        const defaultSearches = ["Nature", "Abstract", "Random", "Mountains", "River"];
        let random = Math.round(Math.random() * 4);
        let query = defaultSearches[random]

        effectSearch({ query: query })

    }, [])

    const effectSearch = async ({ query }) => {
        setErrors('')

        setLoading(true)
        if (String(query)) {
            try {
                const data = await pexels.search({ query: query })
                if (data) {
                    setImages(data)
                }
            } catch (error) {
                setErrors(`We are unable to find any results for ${query}, try something different.`)
            }
        } else {
            setErrors(`We are unable to find any results for ${query}, try something different.`)
        }
        setLoading(false)
    }

    const onSearch = async () => {
        setErrors('')
        const query = ref.current?.value?.trim();

        setLoading(true)
        if (String(query)) {
            try {
                const data = await pexels.search({ query: query })
                if (data) {
                    setImages(data)
                }
            } catch (error) {
                setErrors(`We are unable to find any results for ${query}, try something different.`)
            }
        } else {
            setErrors(`We are unable to find any results for ${query}, try something different.`)
        }
        setLoading(false)
    }

    const nextPage = async () => {
        setErrors('')
        window.scrollTo({ top: 0, behavior: "smooth" })
        const query = ref.current?.value?.trim();

        setLoading(true)
        try {
            const data = await pexels.nextPage({ nextURL: images.next_page })
            if (data) {
                setImages(data)
            }
        } catch (error) {
            setErrors(`We are unable to find any results for ${query}, try something different.`)
        }
        setLoading(false)
    }

    const prevPage = async () => {
        setErrors('')
        window.scrollTo({ top: 0, behavior: "smooth" })
        const query = ref.current?.value?.trim();

        setLoading(true)
        try {
            const data = await pexels.search({ query: query, page: images.page - 1 })
            if (data) {
                setImages(data)
            }
        } catch (error) {
            setErrors(`We are unable to find any results for ${query}, try something different.`)
        }
        setLoading(false)
    }


    return (
        <>
            <div className='bg-[#006d77] w-full h-2/3 pt-[75px] bg-cover text-white lg:h-[75%] xl:h-[85%]'
                style={{
                    backgroundImage: `url(${homebg})`, backgroundPosition: 'center 20%'
                }}
            >

                <div className='w-full h-full bg-[#000]/45 flex justify-center items-center flex-col'>
                    <h1 className='text-5xl font-bold md:text-7xl'>RAPTOR</h1>
                    <h2 className='normal-case px-7 text-center text-xl mt-3 md:text-3xl'>One touch of nature makes the whole world kin.</h2>

                    <div className="relative mt-6 w-[250px] sm:w-[300px] md:w-[500px]">
                        <input
                            className="p-3 w-full pl-14 sm:pl-20 rounded-xl tracking-[1px] outline-none px-3 py-3 bg-white focus:bg-gray-50 duration-200 border border-gray-200 text-black"
                            type="text"
                            id='#'
                            ref={ref}
                            placeholder="Search for photos"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSearch();
                                }
                            }}
                        />

                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <ScanSearch color='black' size={36} className='hover:cursor-pointer hover:scale-110'
                                onClick={() => onSearch()}
                            />
                        </span>
                    </div>
                    <p className='mt-3 text-sm tracking-[2px]'>Powered by Pexels</p>
                    {
                        errors && <p className='mt-3 text-sm'>{errors}</p>
                    }

                    {
                        loading && <Bars speed={.50} height="30px" width="30px" className='mt-3' />

                    }
                </div>
            </div>

            <Photos photos={images} />


            <div className='h-auto py-3 flex justify-center items-center bg-white'>
                <div className='max-w-[760px] min-w-[300px] w-full flex flex-row justify-center items-center' >

                    {
                        images.page > 1 &&
                        <p onClick={prevPage}
                            className='text-black mx-auto my-2 rounded-xl text-base py-2 px-4 border-2 border-black hover:cursor-pointer'>
                            back</p>
                    }


                    <p
                        className='text-black mx-auto my-2 rounded-xl text-base py-2 px-4 border-2 hover:cursor-default border-black'>
                        Page {images.page}</p>

                    {
                        images.next_page &&
                        <p onClick={nextPage}
                            className='text-black mx-auto my-2 rounded-xl text-base py-2 px-4 border-2 border-black hover:cursor-pointer'>
                            next</p>
                    }

                </div>
            </div>
        </>
    )
}

export default Home

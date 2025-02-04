import React from 'react'

const Error404 = () => {
    return (
        <div className='w-full h-2/3 bg-black xl:h-[100%] 2xl:h-[120%]'>

            <div className='w-full h-full flex flex-col justify-center items-center relative'>
                <h1 className='text-white font-bold text-[160px] mm:text-[220px] md:text-[300px]'>404</h1>

                <div className='w-[350px] min-w-[280px] h-28 bg-teal-800 flex flex-col justify-center items-center bg-white/10 rounded-lg backdrop-blur-md shadow-lg absolute border-2 border-[#344e41] top-[58%] mm:top-[62%] md:top-[60%] md:w-[590px] md:h-[150px]'>

                    <p className='text-2xl'>Oops, page not found</p>
                    <p className='mt-3 text-lg text-center'>It might have been moved, deleted, or perhaps you mistyped the URL.</p>
                </div>
            </div>
        </div>
    )
}

export default Error404
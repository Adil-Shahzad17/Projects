import React from 'react'
import homebg from "../Assets/homebg.jpg"
import about from "../Assets/about.jpg"
import contactimage from "../Assets/contactimage.jpg"
import GuestImage from "../Assets/GuestImage.jpg"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { saveAs } from "file-saver"
import { CloudDownload } from 'lucide-react'


const Photos = ({ photos }) => {
    const photo = photos.photos

    const downloadImage = (url, filename) => {
        saveAs(url, filename); // Triggers a download of the file
    };

    const images = [
        { id: 1, image: homebg },
        { id: 2, image: about },
        { id: 3, image: contactimage },
        { id: 4, image: GuestImage },
        { id: 5, image: homebg },
        { id: 6, image: about },
        { id: 7, image: contactimage },
        { id: 8, image: GuestImage },
        { id: 9, image: homebg },
    ]

    if (Object.keys(photos).length === 0) {
        return (
            <div className='w-full h-auto bg-[#595B5E] p-4 mm:px-6 sm:px-8 md:px-10'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
                >
                    <Masonry>
                        {
                            images.map((image) => (
                                <div key={image.id} className='relative'>
                                    <img src={image.image} alt="Image" className='rounded-lg' />
                                    <div className="absolute inset-0 bg-[#F4F4F2] bg-opacity rounded-lg"></div>
                                </div>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        )
    }
    else {
        return (
            <div className='w-full h-auto p-4 mm:px-6 sm:px-8 md:px-10 bg-white text-black overflow-auto'
            >
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
                >
                    <Masonry>
                        {
                            photo.map((photo) => (
                                <div key={photo.id} className='relative'>

                                    <div className='absolute w-full h-full rounded-lg bg-black/70 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300'>
                                        <CloudDownload size={70} color='white'
                                            onClick={() => downloadImage(photo.src.original, `${photo.alt}-${photo.id}.jpg`)}
                                            className='cursor-pointer' />
                                    </div>

                                    <img src={photo.src.original} alt='Image falied to load' className='rounded-lg'
                                    />
                                </div>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>


            </div>
        )
    }
}

export default Photos
import React from 'react'

function Button({
    type,
    text,
    className = "",
    ...props
}) {

    return (
        <button type={type} {...props}
            className={`bg-[#c4c4c4] rounded-2xl text-white font-sans 
        // font-normal text-md outline-none hover:bg-black ${className}`}
        >

            {text}
        </button>
    )
}

export default Button
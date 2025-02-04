import React, { forwardRef, useId } from 'react'

function Input({ label, type, classname = "", ...props }, ref) {

    const id = useId()

    return (
        <div className={`${classname} text-[#6b705c] `}>
            {label && <label
                className='inline-block'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
}

export default forwardRef(Input)
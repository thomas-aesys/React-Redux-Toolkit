import React from 'react'

const Button = ({className,onClick, children}) => {
    return (
        <div>
            <button className={className} onClick={onClick}>{children}</button>
        </div>

    )
}

export default Button;
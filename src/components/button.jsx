import React from 'react'
import './button.css'

const Button = ({onClick, children}) => {
    return (
        <div className="container_button">
            <button className="button" onClick={onClick}>{children}</button>
        </div>

    )
}

export default Button;
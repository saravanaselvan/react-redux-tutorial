import React from 'react';

export const ButtonInline = ({ type = 'button', onClick, children }) => {
    return (
        <button
            type={type}
            className="button-inline"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const Button = ({ type = 'button', onClick, className, children }) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button;
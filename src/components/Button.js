import React from 'react'
import './Button.css'

const Button = ({ type, onClick, disabled, text }) => (
  <button className="btn" type={type} onClick={onClick} disabled={disabled}>
    {text}
  </button>
)

export default Button

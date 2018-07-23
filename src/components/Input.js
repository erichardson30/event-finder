import React from 'react'
import './Input.css'

const Input = ({ type, placeholder, onChange, name, required }) => (
  <input
    type={type}
    className="Input"
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    required={required}
  />
)

export default Input

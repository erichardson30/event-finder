import React from 'react'
import Input from './Input'
import Button from './Button'
import './Header.css'

const Header = ({ onFormSubmit }) => (
  <div className="Header">
    <div className="Header-event-search">
      <h1 className="Header-title">Welcome to Event Finder</h1>
      <form className="Header-search" onSubmit={onFormSubmit}>
        <Input
          type="text"
          name="searchLocation"
          placeholder="Enter location..."
          required
        />
        <Button type="submit" text="Search" />
      </form>
    </div>
  </div>
)

export default Header

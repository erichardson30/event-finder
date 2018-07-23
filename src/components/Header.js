import React from 'react'
import Input from './Input'
import Button from './Button'
import './Header.css'

const Header = ({ onFormSubmit }) => (
  <div className="App-header">
    <div className="App-event-search">
      <h1 className="App-title">Welcome to Event Finder</h1>
      <form className="App-search" onSubmit={onFormSubmit}>
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

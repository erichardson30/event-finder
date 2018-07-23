import React from 'react'
import Button from './Button'
import './Footer.css'

const Footer = ({ currentPage, getEvents, pages, location }) => (
  <div className="footer">
    <Button
      type="button"
      text="Previous"
      disabled={currentPage === 1}
      onClick={() => getEvents(location, currentPage - 1)}
    />
    <Button
      type="button"
      text="Next"
      disabled={currentPage === pages}
      onClick={() => getEvents(location, currentPage + 1)}
    />
  </div>
)

export default Footer

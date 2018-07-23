import React from 'react'
import Footer from '../Footer'
import EventCard from './EventCard'
import './Events.css'

// opens event page from Eventbrite
function goToEvent(event) {
  window.open(event.url, '_blank')
}
const Events = ({
  location,
  totalCount,
  events,
  currentPage,
  pages,
  getEventsByLocation,
}) => (
  <div className="Events">
    <div className="Events-header">
      <div className="Events-location">
        <i className="fas fa-map-marker-alt" />
        {location ? location : 'Please search a location to see events'}
      </div>
      <div className="Events-count">Total Events: {totalCount}</div>
    </div>
    <div className="Events-event-container">
      {events.map((event, index) => (
        <EventCard onClick={goToEvent} event={event} key={index} />
      ))}
    </div>
    {events.length > 0 ? (
      <Footer
        currentPage={currentPage}
        pages={pages}
        location={location}
        getEvents={getEventsByLocation}
      />
    ) : null}
  </div>
)

export default Events

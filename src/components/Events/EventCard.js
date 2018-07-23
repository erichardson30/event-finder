import React from 'react'
import moment from 'moment'

import noImage from '../../img/no-image-available.png'
import './EventCard.css'

const EventCard = ({ onClick, event }) => (
  <div className="event" onClick={() => onClick(event)}>
    <img
      className="event-img"
      src={event.logo ? event.logo.url : noImage}
      alt="event logo"
    />
    <section className="event-details">
      <div className="header">{event.name.text}</div>
      <div className="date">
        {moment(event.start.local).format('MMM DD, YYYY hh:mm a')}
      </div>
      <div className="location" />
      <div className="description">
        {event.description.text || 'No description available...'}
      </div>
    </section>
  </div>
)
export default EventCard

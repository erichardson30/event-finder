import React from 'react'
import './Loading.css'

const Loading = () => (
  <div className="Loading">
    Loading your events...
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  </div>
)

export default Loading

import React from 'react'
import './ScrollToTop.css'

export const ScrollToTop = () => (
  <span id="scrollToTopBtn" className="fa-stack fa-2x" onClick={scrollToTop}>
    <i className="fas fa-circle fa-stack-2x" />
    <i className="fas fa-chevron-up fa-stack-1x fa-inverse" />
  </span>
)

export const scrollFunction = function() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById('scrollToTopBtn').style.display = 'block'
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none'
  }
}

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

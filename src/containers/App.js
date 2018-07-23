// libraries
import React, { Component } from 'react'
import axios from 'axios'

// components
import Loading from '../components/Loading'
import { scrollFunction, ScrollToTop } from '../components/ScrollToTop'
import Header from '../components/Header'
import Events from '../components/Events/Events'

const initialState = {
  location: '',
  loading: false,
  events: [],
  pages: 0,
  totalCount: 0,
  pageSize: 0,
  hasMoreEvents: false,
  currentPage: 1,
  lookupError: false,
}
class App extends Component {
  state = initialState

  componentDidMount() {
    // sets on scroll function for scroll to top button
    window.onscroll = function() {
      scrollFunction()
    }

    // gets users IP address to determine their city & state for events
    axios
      .get('https://api.ipify.org?format=json')
      .then(res => {
        const IP = res.data.ip
        // api to pull back city & state based on users IP address
        axios
          .get(
            `https://api.ipstack.com/${IP}?access_key=${
              process.env.REACT_APP_IPSTACK_KEY
            }`
          )
          .then(res => {
            if (res.data.error) {
              console.log('Error getting users location')
            } else {
              const city = res.data.city
              const state = res.data.region_name
              this.getEventsByLocation(`${city}, ${state}`)
            }
          })
          .catch(err => {
            console.log('Unable to get users location: ', err)
          })
      })
      .catch(err => {
        console.log('Unable to get users IP: ', err)
      })
  }

  // fetches events based on location...results are paginated
  getEventsByLocation = (location, page) => {
    this.setState({ loading: true })
    const fetchPage = page || this.state.currentPage
    axios
      .get(
        `${
          process.env.REACT_APP_API_URL
        }events/search/?location.address=${location}&sort_by=date&page=${fetchPage}&token=${
          process.env.REACT_APP_API_TOKEN
        }`
      )
      .then(res => {
        this.setState({
          location: location,
          events: res.data.events,
          totalCount: res.data.pagination.object_count,
          currentPage: res.data.pagination.page_number,
          pageSize: res.data.pagination.page_size,
          pages: res.data.pagination.page_count,
          hasMoreEvents: res.data.pagination.has_more_items,
          loading: false,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({ ...initialState, lookupError: true })
      })
  }

  // captures form submit to search events by location
  onFormSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const location = formData.get('searchLocation')
    this.getEventsByLocation(location)
  }

  render() {
    return (
      <div className="App">
        <ScrollToTop />
        <Header onFormSubmit={this.onFormSubmit} />
        <React.Fragment>
          {this.state.loading ? (
            <Loading />
          ) : (
            <div className="App-content">
              {this.state.lookupError ? (
                <div className="error">
                  There was an error with your request. Please try again.
                </div>
              ) : (
                <Events
                  location={this.state.location}
                  totalCount={this.state.totalCount}
                  events={this.state.events}
                  currentPage={this.state.currentPage}
                  pages={this.state.pages}
                  getEventsByLocation={this.getEventsByLocation}
                />
              )}
            </div>
          )}
        </React.Fragment>
      </div>
    )
  }
}

export default App

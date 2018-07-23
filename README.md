# Welcome to Event Finder

This application loads an initial set of events based on the city and state gathered from the users IP address.

The user is able to search for events by location. All the events available from [Eventbrite](https://www.eventbrite.com/) for the given location will be displayed. Events are displayed sorted by most recent.

To see all the event details, click on the event to be brought to the Eventbrite event listing.

# Application architecture

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Has support for CSS preprocessing with SASS.

Basic folder structure is outlined utilizing the container/components architecture.

## API's Used

- [Eventbrite](https://www.eventbrite.com/developer/v3/api_overview/) - Fetch events and event details
- [ipify](https://www.ipify.org/) - Fetch users IP address
- [ipstack](https://ipstack.com/documentation) - Fetch users location based on IP address

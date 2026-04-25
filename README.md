# Saigon Map Explorer

Saigon Map Explorer is a web-based interactive map application that allows users to explore locations in Ho Chi Minh City, including prominent places, coffee shops, entertainment venues, and restaurants.

The application integrates Google Maps APIs to provide real-time interaction such as marker visualization, geolocation, geocoding, and route directions. It demonstrates front-end development skills, API integration, and dynamic UI behavior.

---

## Features

### Interactive Map

- Displays multiple predefined locations on a Google Map
- Uses category-based custom marker icons
- Each marker includes an info window showing:
  - Image
  - Name
  - Address
  - Category
  - Coordinates

### Marker Filtering

- Filter markers by category:
  - Prominent Places
  - Coffee Shops
  - Entertainment
  - Restaurants
- Option to display all markers

### Geolocation

- Retrieves and displays the user's current location
- Displays the marker for Nguyen Hue Pedestrian Street, which is a famous street in District 1, Ho Chi Minh City.
- Uses a distinct marker icon
- Allows updating the current location dynamically

### Add Markers for New Locations (Geocoding)

- Users can input:
  - Location name
  - Address
  - Category
- Address is converted into coordinates using the Google Geocoding API
- A new marker is dynamically added to the map

For example:

- Name: Rex Hotel
- Address: 141 Nguyen Hue Street

### Directions

- Users can select a starting location and a destination
- The application calculates and displays the route on the map
- Uses Google Directions Service

### Responsive Design

- Built with Bootstrap
- Layout adapts for both desktop and mobile screens

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Maps JavaScript API
  - Maps
  - Geocoder
  - Directions Service
- Bootstrap 5

---

## License

This project is licensed under the MIT License.

---

## What I Learned

- How to integrate and work with external APIs, specifically Google Maps JavaScript API
- Understanding how map-based applications manage data such as coordinates, markers, and user interactions
- Implementing event-driven programming (e.g., button clicks, marker interactions) to dynamically update the UI
- Handling geolocation data from the browser and updating the map accordingly
- Using geocoding to convert user-input addresses into geographic coordinates
- Implementing route calculation using the Directions Service
- Structuring code to connect data (locations) with UI elements (markers and info windows)
- Applying responsive design principles using Bootstrap for cross-device compatibility

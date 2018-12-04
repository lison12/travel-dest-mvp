import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import List from './List.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        {name: 'Golden Gate Bridge', rating: 5}, 
        {name: 'Big Sur', rating: 5, photos: []}, 
        {name: 'Chinatown', rating: 5}, 
        {name: 'Alcatraz', rating: 5, photos: []}
      ],
      city: 'San Francisco'
    }
    this.getPlaces = this.getPlaces.bind(this);
  }
  
  componentDidMount() {
    this.getPlaces(this.state.city);
  
  }
  
  getPlaces(city) {
    const cityCap = city.charAt(0).toUpperCase() + city.slice(1);
    // console.log(cityCap)

    axios.get(`/attractions/${city}`)
    .then(results => {
      // console.log(results.data);
      this.setState({
        items: results.data,
        city: cityCap
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Travel Destination</h1>  
        <Search getPlaces={ this.getPlaces }/>
        <h2>Attractions List in { this.state.city }</h2>
        <List items={ this.state.items }/>
      </div>
    )
  }
}

export default App;


// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${api.GOOGLE_API_KEY}

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=san+francisco+point+of+interest&key=AIzaSyB7O1vC4xHhghzoU8bzIwIhBbNzUh85D4s

  // $.ajax({
    //   url: '/attractions', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
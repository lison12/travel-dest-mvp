import React, { Component } from 'react';
// import axios from 'axios';

// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div className='container-search'>
        {/* <h3>Destination City</h3> */}
        <input className='search' placeholder="Search for destination" onChange={(e) => this.handleInputChange(e)} />
        <button role='button' className="ui icon button" value='Submit' onClick={() => { this.props.getPlaces(this.state.query) }} >Search</button>
        {/* <p>{this.state.query}</p> */}
      </div>
    )
  }
}

export default Search





// getInfo() {
//   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
//     .then(({ data }) => {
//       this.setState({
//         results: data.data
//       })
//     })
// }


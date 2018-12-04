import React, { Component } from 'react'
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
      <div>
        <h3>Destination City</h3>
        <input placeholder="Search for destination" onChange={(e) => this.handleInputChange(e)} />
        <input type='button' value='Submit' onClick={() => { this.props.getPlaces(this.state.query) }} />
        {/* <p>{this.state.query}</p> */}
      </div>
    )
  }
}

export default Search

// this.state.query
// ref={input => this.search = input}

// getInfo() {
//   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
//     .then(({ data }) => {
//       this.setState({
//         results: data.data
//       })
//     })
// }


// handleInputChange() {
//   this.setState({
//     query: this.search.value
//   }, () => {
//     if (this.state.query && this.state.query.length > 1) {
//       if (this.state.query.length % 2 === 0) {
//         this.getInfo()
//       }
//     } 
//   })
// }
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: '',
    };


  }

  handleCommentTextChange(event){
    this.setState({
      example: event.target.value
    })
  }



  handleFormSubmit(event){
    event.preventDefault()
  }

  componentWillMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    .then(r => r.json() )
    .then((json) => {
      console.log("Data from componentWillMount fetch", json)
      this.setState({nasa: json})
    })
  }

  render() {
    let nasa = this.state.nasa;
    return (
      <div className="App container-fluid">
        <h1>Here is some text</h1>
      </div>
    )
  }
}

export default App;

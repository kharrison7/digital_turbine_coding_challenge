import React, { Component } from 'react';
import request from 'superagent';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: '',
      json: {},
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
    fetch('http://ads.appia.com/getAdsDebug?id=3855&password=OCD8KOQI8F4MPUPXDXDE0V4EZF&key=r3c@che4t0mc@t&userAgentHeader=Android&siteId=9814')
    .then(r => r.json() )
    .then((json) => {
      console.log("Data from componentWillMount fetch", json)
      this.setState({json: json})
    })

    // This makes the GET request.
    request
          .get(`http://ads.appia.com/getAdsDebug?id=3855&password=OCD8KOQI8F4MPUPXDXDE0V4EZF&key=r3c@che4t0mc@t&userAgentHeader=Android&siteId=9814`)
          .end((err, res) => {
              if (err) {
                console.log("failed to GET");
              } else {
                this.setState({json: res.body}, () => {
                });
              }
          })
  }

  render() {
    let json = this.state.json;
    console.log(json);
    return (
      <div className="App container-fluid">
        <h1>Here is some text</h1>
      </div>
    )
  }
}

export default App;

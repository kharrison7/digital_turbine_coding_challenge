import React, { Component } from 'react';
import request from 'superagent';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: '',
      url: '',
      json: {},
    };
  }

  // These are in case the application needs to handle inputs.
  handleCommentTextChange(event){
    this.setState({
      example: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault()
  }

  // This loads the data when the page is mounted.
  componentWillMount() {
    // This code generates the url to make the request.
    let url = 'http://ads.appia.com/getAdsDebug?id=3855&password=OCD8KOQI8F4MPUPXDXDE0V4EZF&key=r3c@che4t0mc@t&userAgentHeader=Android&siteId=9814';
    let paramName = 'sessionid';
    // This generates a random number 1-10 inclusive.
    let value = Math.floor((Math.random() * 10) + 1);
    let addToEnd = '&sessionId=' + value;
    // The following code is optional to avoid CORS.
    const proxyurl = "https://boiling-castle-73930.herokuapp.com/";
    let urlSearch = `${proxyurl}` + url + addToEnd;
    // let urlSearch = url + addToEnd;
    console.log(value);
    console.log(urlSearch);

    // This makes the GET request.
    request
          .get(urlSearch)
          .end((err, res) => {
              if (err) {
                console.log("failed to GET");
                console.log(err);
              } else {
                console.log(res.body);
                this.setState({json: res.body, url: urlSearch}, () => {
                });
              }
          })
  }

  render() {
    let json = this.state.json;
    let url = this.state.url;
    console.log(json);
    console.log(url);
    return (
      <div className="App container-fluid">
        <h1>Here is some text</h1>
      </div>
    )
  }
}

export default App;

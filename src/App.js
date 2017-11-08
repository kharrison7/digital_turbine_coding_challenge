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
    let url = 'http://ads.appia.com/getAdsDebug?id=3855&password=OCD8KOQI8F4MPUPXDXDE0V4EZF&key=r3c@che4t0mc@t&userAgentHeader=Android&siteId=9814';
    let paramName = 'sessionid';
    let value = 1;
    let addToEnd = '&sessionid=1';
    let urlSearch = url + addToEnd;
    console.log(urlSearch);

    // This makes the GET request.
    request
          .get(urlSearch)
          .end((err, res) => {
              if (err) {
                console.log("failed to GET");
                console.log(err);
              } else {
                this.setState({json: res.body}, () => {
                });
              }
          })

          // fetch('http://ads.appia.com/getAdsDebug?id=3855&password=OCD8KOQI8F4MPUPXDXDE0V4EZF&key=r3c@che4t0mc@t&userAgentHeader=Android&siteId=9814')
          // .then(r => r.json() )
          // .then((json) => {
          //   console.log("Data from componentWillMount fetch", json)
          //   this.setState({json: json})
          // })
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

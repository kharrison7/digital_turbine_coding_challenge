import React, { Component } from 'react';
import request from 'superagent';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      intValue: 0,
      json: {},
    };
  }

  // This loads the data when the page is mounted.
  componentWillMount() {
    // This code generates the url to make the request.
    let url = 'http://ads.appia.com/getAdsDebug?id=3855&password=OCD8KOQI8F4MPUPXDXDE0V4EZF&key=r3c@che4t0mc@t&userAgentHeader=Android&siteId=9814';
    let paramName = 'sessionId';
    // This generates a random number 1-10 inclusive.
    let value = Math.floor((Math.random() * 10) + 1);
    let addToEnd = `&${paramName}=` + value;
    // The following code is optional to avoid the need for CORS.
    const proxyurl = "https://boiling-castle-73930.herokuapp.com/";
    let urlSearch = `${proxyurl}` + url + addToEnd;
    let urlValue = url + addToEnd;
    this.setState({
      intValue: value,
      url: urlValue
    })

    // This makes the GET request.
    request
          .get(urlSearch)
          .end((err, res) => {
              if (err) {
                console.log("failed to GET");
                console.log(err);
              } else {
                // This sets the state to fit the response.
                this.setState({json: res.body, url: urlValue}, () => {
                });
              }
          })
  }

  render() {
    let json = this.state.json;
    let url = this.state.url;
    let value = this.state.intValue;
    let filteredCampaigns = json.filteredCampaigns;

    return (
      <div className="App container-fluid">
        <h1>Kevin Harrison - Digital Turbine Scripting Exercise Table Page</h1>
        <p>Url Called: {url}</p>
        <h3>Random Integer Generated: {value}</h3>

        <div className="center-itmes">
          {filteredCampaigns ? (
            <div>
              <div>
                <p>Data Collected:</p>
              </div>

              <table className="table table-striped table-hover table-responsive table-bordered">
                <thead>
                  <tr>
                    <th>CampaignId</th>
                    <th>CampaignName</th>
                    <th>Reason/Message</th>
                  </tr>
                </thead>
                {/* This maps the data onto the table: */}
                <tbody>
                  {filteredCampaigns.map( (term, i) => {
                  // console.log(term);
                    return(
                      <tr key={i} >
                        <td className="align-left">{term.campaignId}</td>
                        <td className="align-left">{term.campaignName}</td>
                        <td className="align-left">{term.failedFilters[0].message}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

            </div>
          ): "Loading Table Data - If the data fails to load, make sure that CORs is on, Ad Block is off, and that any Chrome extensions are off."}
        </div>

      </div>
    )
  }
}

export default App;

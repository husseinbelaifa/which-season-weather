import React from "react";
import ReactDom from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
// const App = () => {
//   // return <div>Hi there !</div>;

//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.log(error)
//   );

//   return <div>Latitude:</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = {
    lat: null,
    errorMessage: "",
    time: new Date().toLocaleDateString
  };

  UpdateState() {
    this.setState({ time: new Date().toLocaleString() });
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }),
      error =>
        this.setState({
          errorMessage: error.message
        })
    );

    setInterval(() => {
      console.log("update time");
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("My component was updated");
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          {/* Latitude:{this.state.lat} <br /> */}
          Error: {this.state.errorMessage}
        </div>
      );
    }

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          {/* Latitude: {this.state.lat} <br /> */}

          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    if (this.state.lat && this.state.errorMessage) {
      return (
        <div>
          {/* Latitude:{this.state.lat} <br /> */}
          Error: {this.state.errorMessage}
        </div>
      );
    }

    return <Spinner message="Pleace accept location request" />;
  }

  // state = {};

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
        <div className="time"> {this.state.time}</div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));

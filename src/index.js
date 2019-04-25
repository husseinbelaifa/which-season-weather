import React from "react";
import ReactDom from "react-dom";

// const App = () => {
//   // return <div>Hi there !</div>;

//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.log(error)
//   );

//   return <div>Latitude:</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // state = {};

  render() {
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          Latitude:{this.state.lat} <br />
          Error:{this.state.errorMessage}
        </div>
      );
    }

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          Latitude:{this.state.lat} <br />
          Error:{this.state.errorMessage}
        </div>
      );
    }

    if (this.state.lat && this.state.errorMessage) {
      return (
        <div>
          Latitude:{this.state.lat} <br />
          Error:{this.state.errorMessage}
        </div>
      );
    }

    return <div>Loading!</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));

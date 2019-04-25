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
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return <div>Latitude:</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));

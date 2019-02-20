import React from "react";
import Calculator from "./components/Calculator";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}

export default App;

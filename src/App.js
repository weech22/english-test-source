import React, { Component } from "react";
import "normalize.css";
import styled from "styled-components";
import Quiz from "./Quiz";
import "./fonts/font.css";
require("dotenv").config();
const Wrap = styled.div`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <Quiz />
      </Wrap>
    );
  }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";
import A from "./A";
import B from "./B";

const Wrap = styled.div``;

class Reading2 extends Component {
  render() {
    const { question } = this.props;
    return (
      <Wrap>
        {question === "A" && (
          <A
            pointsCounter={this.props.pointsCounter}
            stageSwitcher={this.props.stageSwitcher}
          />
        )}
        {question === "B" && (
          <B
            pointsCounter={this.props.pointsCounter}
            stageSwitcher={this.props.stageSwitcher}
          />
        )}
      </Wrap>
    );
  }
}

export default Reading2;

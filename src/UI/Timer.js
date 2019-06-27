import React, { Component } from "react";
import Countdown from "react-countdown-now";
import styled from "styled-components";

const Digits = styled.span`
  font-size: 26px;
  color: palevioletred;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (!completed) {
    return (
      <Digits>
        {minutes}:{seconds}
      </Digits>
    );
  }
};

class Timer extends Component {
  render() {
    const { onComplete, time } = this.props;
    return (
      <Wrap>
        <Countdown
          date={time + 60000 * 60}
          renderer={renderer}
          onComplete={onComplete}
        />
      </Wrap>
    );
  }
}

export default Timer;

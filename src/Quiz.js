import React, { Component } from "react";
import styled from "styled-components";
import Listening from "./Listening";
import Reading1 from "./Reading/1";
import Reading2 from "./Reading/2";
import UseOfEnglish1 from "./UseOfEnglish/1";
import UseOfEnglish2 from "./UseOfEnglish/2";
import Timer from "./UI/Timer";
import ResultScreen from "./ResultScreen";
import StageTitle from "./UI/StageTitle";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const Wrap = styled.div`
  width: 55%;
  margin: 0 auto;
  margin-top: 10%;
  padding: 30px 20px;
  border: 5px solid palevioletred;
  border-radius: 10px;
  box-shadow: 15px 15px 13px rgba(140, 140, 140, 0.7);
  background: white;
`;

const Denied = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

const listeningQuestion = Math.random(0.5) > 0.5 ? "A" : "B";
const reading1Question = Math.random(0.5) > 0.5 ? "A" : "B";
const reading2Question = Math.random(0.5) > 0.5 ? "A" : "B";
const useOfEnglish1Question = Math.random(0.5) > 0.5 ? "A" : "B";
const useOfEnglish2Question = Math.random(0.5) > 0.5 ? "A" : "B";

class Quiz extends Component {
  state = {
    points: 0,
    stage: "Listening", // Use of English Reading Listening result denied
    isTimeUp: false,
    time: undefined,
    userData: {
      name: "",
      school: "",
      grade: "",
      phone: "",
      email: "",
      denied: ""
    }
  };

  componentDidMount = () => {
    this.setState({ time: Date.now() });
    const url = window.location.href;

    const userData = url
      .substring(url.indexOf("?") + 1)
      .split("&")
      .map(pair => pair.split("="))
      .reduce((acc, pair) => {
        return {
          ...acc,
          [pair[0]]: decodeURIComponent(pair[1])
        };
      }, {});
    if (userData.denied === "true") {
      this.setState({ stage: "denied" });
    } else {
      if (userData.phone) {
        if (parsePhoneNumberFromString(userData.phone)) {
          userData.phone = parsePhoneNumberFromString(
            userData.phone
          ).formatNational();
        }
      }
      this.setState({ userData });
    }
  };

  pointsCounter = points => {
    if (points) {
      this.setState({ points: this.state.points + points });
    } else {
      this.setState({ points: this.state.points + 1 });
    }
  };

  timerHandler = time => {
    this.setState({ time });
  };

  stageSwitcher = stage => {
    this.setState({ stage });
  };

  onTimerComplete = () => {
    this.setState({ stage: "result", isTimeUp: true });
  };

  render() {
    const { points, stage, isTimeUp, time, userData } = this.state;
    console.log(this.state.userData);
    return (
      <Wrap>
        {stage === "denied" && <Denied>Вы уже проходили тест.</Denied>}
        {stage !== "result" && stage !== "denied" && (
          <div>
            <StageTitle stage={stage} />
            <Timer
              onComplete={this.onTimerComplete}
              time={time}
              handler={this.timerHandler}
            />
          </div>
        )}
        {stage === "Listening" && (
          <Listening
            question={listeningQuestion}
            pointsCounter={this.pointsCounter}
            stageSwitcher={this.stageSwitcher}
          />
        )}
        {stage === "Reading I" && (
          <Reading1
            question={reading1Question}
            pointsCounter={this.pointsCounter}
            stageSwitcher={this.stageSwitcher}
          />
        )}
        {stage === "Reading II" && (
          <Reading2
            question={reading2Question}
            pointsCounter={this.pointsCounter}
            stageSwitcher={this.stageSwitcher}
          />
        )}
        {stage === "Use of English I" && (
          <UseOfEnglish1
            question={useOfEnglish1Question}
            pointsCounter={this.pointsCounter}
            stageSwitcher={this.stageSwitcher}
          />
        )}
        {stage === "Use of English II" && (
          <UseOfEnglish2
            question={useOfEnglish2Question}
            pointsCounter={this.pointsCounter}
            stageSwitcher={this.stageSwitcher}
          />
        )}
        {stage === "result" && (
          <ResultScreen
            points={points}
            isTimeUp={isTimeUp}
            userData={userData}
          />
        )}
      </Wrap>
    );
  }
}

export default Quiz;

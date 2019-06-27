import React, { Component } from "react";
import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import Question from "../UI/Question";
import { Hr, Task } from "../UI/styles";
import listeningQuestions from "./questions";

const Wrap = styled.div``;

const Audio = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: ${props => (props.listenCount > 0 ? "auto" : "none")}
  opacity: ${props => (props.listenCount > 0 ? "1" : "0.4")}
`;

const QuestionBlock = styled.div``;

class Listening extends Component {
  state = {
    questionCount: this.props.question === "A" ? 8 : 7,
    activeQuestion: 0,
    listenCount: this.props.question === "A" ? 1 : 2
  };

  questionCounter = () => {
    if (this.state.activeQuestion < this.state.questionCount - 1) {
      this.setState({ activeQuestion: this.state.activeQuestion + 1 });
    } else {
      this.props.stageSwitcher("Reading I");
    }
  };

  onEnded = () => {
    this.setState({ listenCount: this.state.listenCount - 1 });
  };

  render() {
    const index = this.props.question === "A" ? 0 : 1;
    const { task, audio, questions } = listeningQuestions[index];
    const { activeQuestion, listenCount } = this.state;
    return (
      <Wrap>
        <Task>{task}</Task>
        <Hr />

        <Audio listenCount={listenCount}>
          <ReactAudioPlayer
            src={audio}
            controls
            controlsList="nodownload"
            onEnded={this.onEnded}
          />
        </Audio>

        <Hr />
        <QuestionBlock>
          <Question
            question={questions[activeQuestion]}
            pointsCounter={this.props.pointsCounter}
            questionCounter={this.questionCounter}
            type="list"
          />
        </QuestionBlock>
      </Wrap>
    );
  }
}

export default Listening;

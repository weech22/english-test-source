import React, { Component } from "react";
import styled from "styled-components";
import Question from "../../UI/Question";
import { Hr, Task, Wrap } from "../../UI/styles";
import questions from "./questions";
import InlineInput from "../../UI/InlineInput";
import arrow from "../../down-arrow.png";

const Example = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const Arrow = styled.img`
  width: 32px;
  height: 32px;
  display: block;
  margin: 25px 0;
`;

const ExampleWord = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Pretty = styled.span`
  color: palevioletred;
`;

class UseOfEnglishA2 extends Component {
  state = {
    questionCount: 6,
    activeQuestion: 0
  };
  questionCounter = () => {
    if (this.state.activeQuestion < this.state.questionCount - 1) {
      this.setState({ activeQuestion: this.state.activeQuestion + 1 });
    } else {
      this.props.stageSwitcher("result");
    }
  };
  render() {
    const { activeQuestion } = this.state;
    return (
      <Wrap>
        <Task>
          For the following questions, complete the second sentence so that it
          has a similar meaning to the first sentence, using the word given. Do
          not change the word given. You must use between two and five words,
          including the word given. Here is an example.
        </Task>
        <Hr />
        <Example>
          <ExampleWord>
            <Pretty>Example:</Pretty> A very friendly taxi driver drove us into
            town.
          </ExampleWord>

          <div>
            {" "}
            We <InlineInput placeholder="driven" /> a very friendly taxi driver.
          </div>
          <Arrow src={arrow} />
          <div>
            We <InlineInput placeholder="were driven into town by" /> a very
            friendly taxi driver.
          </div>
        </Example>
        <Hr />
        <Question
          question={questions[activeQuestion]}
          pointsCounter={this.props.pointsCounter}
          questionCounter={this.questionCounter}
          type="input"
          autofocus
        />
      </Wrap>
    );
  }
}

export default UseOfEnglishA2;

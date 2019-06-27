import React, { Component } from "react";
import styled from "styled-components";
import Options from "./Option";
import { AnswerButton } from "../UI/styles";

const Wrap = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TheQuestion = styled.div`
  font-size: 1.5em;
`;

class Question extends Component {
  state = {
    selectedOption: null,
    isHighlighted: false
  };

  onClick = () => {
    if (this.state.selectedOption) {
      if (this.props.type !== "input") {
        if (
          this.props.question.options.indexOf(
            this.state.selectedOption.toLowerCase()
          ) === this.props.question.key
        ) {
          this.props.pointsCounter();
        }
      } else {
        if (
          this.props.question.keys.indexOf(
            this.state.selectedOption.toLowerCase()
          ) !== -1
        ) {
          this.props.pointsCounter();
        }
      }

      this.props.questionCounter();
    } else {
      this.setState({ isHighlighted: true });
      this.setState({ selectedOption: null });
    }
    this.setState({ selectedOption: null });
  };

  handleOptionChange = selectedOption => {
    this.setState({ selectedOption });
    if (selectedOption) {
      this.setState({ isHighlighted: false });
    }
  };

  render() {
    const { text, options } = this.props.question;
    const { selectedOption, isHighlighted } = this.state;
    return (
      <Wrap>
        <TheQuestion dangerouslySetInnerHTML={{ __html: text }} />
        <Options
          optionList={options}
          onChange={this.handleOptionChange}
          selectedOption={selectedOption}
          type={this.props.type}
          question={this.props.question}
          isHighlighted={isHighlighted}
        />
        <AnswerButton onClick={this.onClick}>Next</AnswerButton>
      </Wrap>
    );
  }
}

export default Question;

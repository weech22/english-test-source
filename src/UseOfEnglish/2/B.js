import React, { Component } from "react";
import styled from "styled-components";
import InlineInput from "../../UI/InlineInput";
import {
  Hr,
  Task,
  AnswerButton,
  Paragraph,
  Wrap,
  Title
} from "../../UI/styles";

const Body = styled.div`
  padding: 0 30px;
  margin-top: -20px;
`;

const keys = [
  ["took"],
  ["rather"],
  ["out", "off", "sail"],
  ["in"],
  ["did"],
  ["came"],
  ["after"],
  ["on", "for"]
];

class UseOfEnglishB2 extends Component {
  state = {
    inputs: [
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false }
    ]
  };
  onClick = () => {
    const { inputs } = this.state;

    if (inputs.some(input => input.value === undefined)) {
      const emptyInputs = inputs.map(input =>
        input.value ? input : { ...input, isHighlighted: true }
      );

      this.setState({ inputs: emptyInputs });
    }

    if (inputs.every(input => input.value !== undefined)) {
      var points = 0;
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].indexOf(this.state.inputs[i].value.toLowerCase()) !== -1) {
          points += 1;
        }
      }

      if (points) {
        this.props.pointsCounter(points);
      }
      this.props.stageSwitcher("result");
    }
  };

  onInputClick = id => {
    const inputs = this.state.inputs.map((input, i) =>
      id === i ? { ...input, isHighlighted: false } : input
    );
    this.setState({ inputs });
  };

  changeHandler = (id, option) => {
    const inputs = this.state.inputs.map((input, i) =>
      id === i ? { isHighlighted: false, value: option } : input
    );
    this.setState({ inputs });
  };

  render() {
    const { inputs } = this.state;
    return (
      <Wrap>
        <Task>
          For the following questions, read the text below and think of the word
          which best fits each gap. Use only one word in each gap. There is an
          example at the beginning.
        </Task>
        <Hr />
        <Title>From black pepper to chilli pepper</Title>
        <Body>
          <Paragraph>
            In the 15th century, Europeans knew nothing of the chilli pepper,
            but they held black pepper in high regard and had used it in cooking
            <InlineInput placeholder="since" /> Greek and Roman times. Ships
            travelling east brought the black pepper from the Spice Islands in
            South East Asia but this
            <InlineInput
              id={0}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[0].isHighlighted}
              onClick={() => this.onInputClick(0)}
            />{" "}
            a long time. In 1492, Christopher Columbus was asked to find a
            shorter route to the Spice Islands, going westwards
            <InlineInput
              id={1}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[1].isHighlighted}
              onClick={() => this.onInputClick(1)}
            />{" "}
            than eastwards, and so he set{" "}
            <InlineInput
              id={2}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[2].isHighlighted}
              onClick={() => this.onInputClick(2)}
            />{" "}
            from Spain across the Atlantic Ocean.
          </Paragraph>
          <Paragraph>
            Columbus didn’t succeed{" "}
            <InlineInput
              id={3}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[3].isHighlighted}
              onClick={() => this.onInputClick(3)}
            />{" "}
            finding the Spice Islands but he{" "}
            <InlineInput
              id={4}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[4].isHighlighted}
              onClick={() => this.onInputClick(4)}
            />{" "}
            manage to discover the Americas. There he
            <InlineInput
              id={5}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[5].isHighlighted}
              onClick={() => this.onInputClick(5)}
            />{" "}
            across another pepper; the chilli, which had been used in cooking in
            South America for thousands of years. Soon{" "}
            <InlineInput
              id={6}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[6].isHighlighted}
              onClick={() => this.onInputClick(6)}
            />{" "}
            Columbus’s discovery, large quantities of chillies were being
            shipped back to Spain from the Caribbean. Later, people realised
            that chillies would actually grow in southern Europe and it wasn’t
            long before fresh chillies were{" "}
            <InlineInput
              id={7}
              changeHandler={this.changeHandler}
              isHighlighted={inputs[7].isHighlighted}
              onClick={() => this.onInputClick(7)}
            />{" "}
            sale in European markets.
          </Paragraph>
        </Body>
        <Hr />
        <div style={{ marginTop: "20px" }} />
        <AnswerButton onClick={this.onClick}>Next</AnswerButton>
      </Wrap>
    );
  }
}

export default UseOfEnglishB2;

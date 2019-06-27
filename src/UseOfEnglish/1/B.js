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

const keys = [
  "proved",
  "variety",
  "enjoyment",
  "safety",
  "unusual",
  "riders",
  "enviroment",
  "suggestions"
];

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-top: -20px;
`;

const Sentence = styled(Paragraph)`
  max-width: 75%;
`;

const SentenceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const Word = styled.div`
  border-left: 1px dashed palevioletred;
  padding-left: 1em;
  margin-left: 1em;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
  min-width: 25%;
`;

const DoubleWordBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-left: 1px dashed palevioletred;
  padding-left: 1em;
  margin-left: 1em;
  min-width: 25%;
`;

const DoubleWord = styled.div`
  border-bottom: 1px dashed palevioletred;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
`;

class UseOfEnglishB1 extends Component {
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
        if (this.state.inputs[i].value.toLowerCase() === keys[i]) {
          points += 1;
        }
      }

      if (points) {
        this.props.pointsCounter(points);
      }
      this.props.stageSwitcher("Use of English II");
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
          For the following questions, read the text below. Use the word given
          in capitals at the end of some of the lines to form a word that fits
          in the gap in the same line. There is an example at the beginning.
        </Task>
        <Hr />
        <Title>Family bike fun</Title>
        <Body>
          <SentenceBlock>
            <Sentence>
              National Bike Week was celebrated last week in a{" "}
              <InlineInput placeholder="MEMORABLE" /> way with a Family Fun Day
              in Larkside Park.
            </Sentence>
            <Word>MEMORY</Word>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              The event{" "}
              <InlineInput
                id={0}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[0].isHighlighted}
                onClick={() => this.onInputClick(0)}
              />{" "}
              to be highly successful with over five hundred people attending.
            </Sentence>
            <Word>PROOF</Word>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              Larkside Cycling Club brought along a{" "}
              <InlineInput
                id={1}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[1].isHighlighted}
                onClick={() => this.onInputClick(1)}
              />{" "}
              of different bikes to demonstrate the{" "}
              <InlineInput
                id={2}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[2].isHighlighted}
                onClick={() => this.onInputClick(2)}
              />{" "}
              that family members of all ages can get from group cycling.
            </Sentence>
            <DoubleWordBlock>
              <DoubleWord>VARY</DoubleWord>
              <DoubleWord>ENJOY</DoubleWord>
            </DoubleWordBlock>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              Basic cycling{" "}
              <InlineInput
                id={3}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[3].isHighlighted}
                onClick={() => this.onInputClick(3)}
              />{" "}
              was taught using conventional bikes.
            </Sentence>
            <Word>SAFE</Word>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              There were also some rather{" "}
              <InlineInput
                id={4}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[4].isHighlighted}
                onClick={() => this.onInputClick(4)}
              />{" "}
              bikes on display.
            </Sentence>
            <Word>USUAL</Word>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              One-wheelers, fivewheelers and even one which could carry up to
              six{" "}
              <InlineInput
                id={5}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[5].isHighlighted}
                onClick={() => this.onInputClick(5)}
              />{" "}
              , were used for fun.
            </Sentence>
            <Word>RIDE</Word>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              The club also gave information on how cycling can help to reduce{" "}
              <InlineInput
                id={6}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[6].isHighlighted}
                onClick={() => this.onInputClick(6)}
              />{" "}
              damage.
            </Sentence>
            <Word>ENVIROMENT</Word>
          </SentenceBlock>
          <SentenceBlock>
            <Sentence>
              They also provided{" "}
              <InlineInput
                id={7}
                changeHandler={this.changeHandler}
                isHighlighted={inputs[7].isHighlighted}
                onClick={() => this.onInputClick(7)}
              />{" "}
              as to how people could substitute the bike for the car for daily
              journeys.
            </Sentence>
            <Word>SUGGEST</Word>
          </SentenceBlock>
          <Paragraph>
            The overall message was that cycling is great family fun and an
            excellent alternative to driving. By the end of the day over a
            hundred people had signed up for membership.
          </Paragraph>
        </Body>
        <Hr />
        <div style={{ marginTop: "20px" }} />
        <AnswerButton onClick={this.onClick}>Next</AnswerButton>
      </Wrap>
    );
  }
}

export default UseOfEnglishB1;

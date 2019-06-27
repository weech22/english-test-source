import React, { Component } from "react";
import styled from "styled-components";
import InlineInput from "./InlineInput";
import arrow from "../arrow.png";
import arrowHover from "../arrow-hover.png";
import arrowHighlight from "../arrow-highlight.png";

const Wrap = styled.div``;
const Caption = styled.span`
  width: 100%;
`;

const Dropdown = styled.select`
  margin: 15px 0;
  appearance: none;
  border-radius: 4px;
  padding: 0 15px;
  border: 2px solid palevioletred;
  cursor: pointer;

  background-color: ${props =>
    props.isHighlighted ? "rgba(255,0,0,0.5)" : "white"};
  background-image: ${props =>
    props.isSelected
      ? "none"
      : props.isHighlighted
      ? `url(${arrowHighlight})`
      : `url(${arrow})`};

  background-repeat: no-repeat;
  background-position: center center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    background-image: ${props =>
      props.isSelected ? "none" : `url(${arrowHover})`};
  }
`;
const GappedSentence = styled.p``;

const OptionList = styled.ol`
  width: 100%;
`;

const LI = styled.li`
  margin-bottom: 0.8em;
  font-size: 1.03em;
`;

const RadioButton = styled.input`
  appearance: none;
  border: 1px solid palevioletred;
  border: 1px solid black;
  width: 15px;
  height: 15px;
  outline: none;
  cursor: pointer;
  border-radius: 10px
  &:checked {
    background: palevioletred;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const Sentence = styled.span`
  font-size: 1.2em;
`;

class Options extends Component {
  state = {
    isSelected: false
  };

  handleChange = event => {
    this.props.onChange(event.target.value);

    if (event.target.value) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  };

  render() {
    const { optionList, selectedOption, type, isHighlighted } = this.props;
    const { sentence, word, part1, part2 } = this.props.question;

    return (
      <Wrap>
        {type === "list" && (
          <OptionList type="A">
            {optionList.map((option, i) => (
              <LI key={i}>
                <RadioButton
                  id={`option-${i}`}
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={this.handleChange}
                />
                <Label for={`option-${i}`}>
                  <Caption> {option}</Caption>
                </Label>
              </LI>
            ))}
          </OptionList>
        )}
        {type === "dropdown" && (
          <Dropdown
            isHighlighted={isHighlighted}
            onChange={this.handleChange}
            value={selectedOption || ""}
            isSelected={selectedOption}
          >
            <option defaultValue />
            {optionList.map((option, i) => (
              <option value={option} key={i * 2}>
                {option}
              </option>
            ))}
          </Dropdown>
        )}
        {type === "input" && (
          <div>
            <Sentence>{sentence}</Sentence>
            <GappedSentence>
              {part1}
              <InlineInput
                changeHandler={this.handleChange}
                placeholder={word}
                value={selectedOption || ""}
              />
              {part2}
            </GappedSentence>
          </div>
        )}
      </Wrap>
    );
  }
}

export default Options;

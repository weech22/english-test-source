import React, { Component } from "react";
import styled from "styled-components";
import arrow from "../arrow.png";
import arrowHover from "../arrow-hover.png";
import arrowHighlight from "../arrow-highlight.png";

const Wrap = styled.select`
  appearance: none;
  outline: none;
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

const Option = styled.option``;

class Dropdown extends Component {
  state = {
    isSelected: false
  };
  onChange = e => {
    this.props.changeHandler(this.props.id, e.target.value);

    if (e.target.value) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  };

  render() {
    const { options, isHighlighted, id } = this.props;
    return (
      <Wrap
        onChange={this.onChange}
        isHighlighted={isHighlighted}
        onClick={this.props.onClick}
        isSelected={this.state.isSelected}
      >
        <Option defaultValue />
        {options.map((option, i) => (
          <Option key={i + id} value={option}>
            {option}
          </Option>
        ))}
      </Wrap>
    );
  }
}

export default Dropdown;

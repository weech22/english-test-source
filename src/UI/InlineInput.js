import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.input`
  appearance: none;
  border: none;
  border-bottom: 1px dashed black;
  text-align: center;
  &:disabled {
    background: white;
  }
  outline: none;
  background: ${props => (props.isHighlighted ? "rgba(255,0,0,0.5)" : "white")};
  border-radius: 4px;
`;

class InlineInput extends Component {
  onChange = e => {
    if (this.props.changeHandler) {
      if (this.props.id === 0 || this.props.id) {
        this.props.changeHandler(this.props.id, e.target.value);
      } else {
        this.props.changeHandler(e);
      }
    }
  };

  render() {
    const { placeholder, changeHandler, isHighlighted, value } = this.props;
    return (
      <Wrap
        placeholder={placeholder}
        onChange={this.onChange}
        disabled={!changeHandler}
        value={value}
        isHighlighted={isHighlighted}
        onClick={this.props.onClick}
      />
    );
  }
}

export default InlineInput;

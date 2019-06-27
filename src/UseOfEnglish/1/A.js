import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "../../UI/Dropdown";
import {
  Hr,
  Task,
  AnswerButton,
  Paragraph,
  Wrap,
  Title
} from "../../UI/styles";

const Body = styled.div`
  margin-top: -20px;
  padding: 0 30px;
`;

const keys = [
  "believed",
  "stuffed",
  "certain",
  "team",
  "up",
  "recently",
  "obviously",
  "remained"
];
const optionList = [
  ["accepted", "regarded", "assessed", "believed"],
  ["stuffed", "loaded", "pushed", "blocked"],
  ["clear", "specific", "true", "certain"],
  ["class", "force", "team", "company"],
  ["over", "into", "up", "about"],
  ["recently", "lately", "presently", "immediately"],
  ["correctly", "exactly", "precisely", "obviously"],
  ["held", "stood", "remained", "lasted"]
];

class UseOfEnglishA1 extends Component {
  state = {
    dropdowns: [
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
    const { dropdowns } = this.state;

    if (dropdowns.some(dropdown => dropdown.value === undefined)) {
      const emptyDropdowns = dropdowns.map(dropdown =>
        dropdown.value ? dropdown : { ...dropdown, isHighlighted: true }
      );

      this.setState({ dropdowns: emptyDropdowns });
    }

    if (dropdowns.every(dropdown => dropdown.value !== undefined)) {
      var points = 0;
      for (let i = 0; i < keys.length; i++) {
        if (this.state.dropdowns[i].value === keys[i]) {
          points += 1;
        }
      }

      if (points) {
        this.props.pointsCounter(points);
      }
      this.props.stageSwitcher("Use of English II");
    }
  };

  onDropdownClick = id => {
    const dropdowns = this.state.dropdowns.map((dropdown, i) =>
      id === i ? { ...dropdown, isHighlighted: false } : dropdown
    );
    this.setState({ dropdowns });
  };

  changeHandler = (id, option) => {
    const dropdowns = this.state.dropdowns.map((dropdown, i) =>
      id === i ? { isHighlighted: false, value: option } : dropdown
    );
    this.setState({ dropdowns });
  };

  render() {
    const { dropdowns } = this.state;
    return (
      <Wrap>
        <Task>
          For the following questions, read the text below and decide which
          answer (A, B, C or D) best fits each gap. There is an example at the
          beginning.
        </Task>
        <Hr />
        <Title>The oldest leather shoe in the world</Title>
        <Body>
          <Paragraph>
            Archaeologists report that a perfectly preserved 5,500-year-old shoe
            has been discovered in a cave in Armenia in south-west Asia. It is{" "}
            <Dropdown
              id={0}
              options={optionList[0]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[0].isHighlighted}
              onClick={() => this.onDropdownClick(0)}
            />{" "}
            to be the oldest leather shoe ever found.
          </Paragraph>
          <Paragraph>
            The shoe was made of a single piece of leather, stitched at the
            front and back, and was shaped to fit the wearer’s foot. It had been{" "}
            <Dropdown
              id={1}
              options={optionList[1]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[1].isHighlighted}
              onClick={() => this.onDropdownClick(1)}
            />{" "}
            with grasses, either for warmth or to make sure it kept its shape.
            ‘The shoe is relatively small but we can’t say for{" "}
            <Dropdown
              id={2}
              options={optionList[2]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[2].isHighlighted}
              onClick={() => this.onDropdownClick(2)}
            />{" "}
            whether it was worn by a man or a woman,’ says Dr Ron Pinhasi, an
            archaeologist on the research{" "}
            <Dropdown
              id={3}
              options={optionList[3]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[3].isHighlighted}
              onClick={() => this.onDropdownClick(3)}
            />{" "}
            ‘We thought at first that it was about 600-700 years old because it
            was in such good shape.’
          </Paragraph>
          <Paragraph>
            Shoes of this type from later periods have turned{" "}
            <Dropdown
              id={4}
              options={optionList[4]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[4].isHighlighted}
              onClick={() => this.onDropdownClick(4)}
            />{" "}
            in archaeological excavations in various trials in Europe, and shoes
            of a very similar design were still being used on the Aran Islands
            off the west coast of Ireland as{" "}
            <Dropdown
              id={5}
              options={optionList[5]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[5].isHighlighted}
              onClick={() => this.onDropdownClick(5)}
            />{" "}
            as the 1950s. It’s{" "}
            <Dropdown
              id={6}
              options={optionList[6]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[6].isHighlighted}
              onClick={() => this.onDropdownClick(6)}
            />{" "}
            a style which{" "}
            <Dropdown
              id={7}
              options={optionList[7]}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[7].isHighlighted}
              onClick={() => this.onDropdownClick(7)}
            />{" "}
            popular for thousands of years.
          </Paragraph>
        </Body>
        <Hr />
        <div style={{ marginTop: "20px" }} />
        <AnswerButton onClick={this.onClick}>Next</AnswerButton>
      </Wrap>
    );
  }
}

export default UseOfEnglishA1;

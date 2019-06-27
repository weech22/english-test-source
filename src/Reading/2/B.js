import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "../../UI/Dropdown";
import {
  Hr,
  Task,
  AnswerButton,
  Paragraph,
  Options,
  SubTitle,
  Title,
  SectionLetter
} from "../../UI/styles";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
`;

const optionList = ["A", "B", "C", "D", "E", "F", "G"];
const keys = ["G", "D", "A", "F", "C", "E"];

class ReadingB2 extends Component {
  state = {
    dropdowns: [
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false },
      { value: undefined, isHighlighted: false }
    ]
  };

  changeHandler = (id, option) => {
    const dropdowns = this.state.dropdowns.map((dropdown, i) =>
      id === i ? { isHighlighted: false, value: option } : dropdown
    );
    this.setState({ dropdowns });
  };

  onDropdownClick = id => {
    const dropdowns = this.state.dropdowns.map((dropdown, i) =>
      id === i ? { ...dropdown, isHighlighted: false } : dropdown
    );
    this.setState({ dropdowns });
  };

  onClick = () => {
    const { dropdowns } = this.state;

    const uniq = dropdowns
      .map((dropdown, i) => {
        return { count: 1, value: dropdown.value };
      })
      .reduce((acc, dropdown) => {
        acc[dropdown.value] = (acc[dropdown.value] || 0) + dropdown.count;
        return acc;
      }, {});

    const duplicates = Object.keys(uniq).filter(a => uniq[a] > 1);

    if (duplicates.length !== 0) {
      const duplicateDropdowns = dropdowns.map(dropdown =>
        duplicates.indexOf(dropdown.value) !== -1
          ? { ...dropdown, isHighlighted: true }
          : { ...dropdown, isHighlighted: false }
      );

      this.setState({ dropdowns: duplicateDropdowns });
    }

    if (dropdowns.some(dropdown => dropdown.value === undefined)) {
      const emptyDropdowns = dropdowns.map(dropdown =>
        dropdown.value ? dropdown : { ...dropdown, isHighlighted: true }
      );

      this.setState({ dropdowns: emptyDropdowns });
    }

    if (
      dropdowns.every(dropdown => dropdown.value !== undefined) &&
      duplicates.length === 0
    ) {
      var points = 0;
      for (let i = 0; i < keys.length; i++) {
        if (this.state.dropdowns[i].value === keys[i]) {
          points += 1;
        }
      }

      if (points) {
        this.props.pointsCounter(points);
      }
      this.props.stageSwitcher("Use of English I");
    }
  };
  render() {
    const { dropdowns } = this.state;
    return (
      <Wrap>
        <Task>
          You are going to read an extract from a magazine article about
          Macquarie Island. Six paragraphs have been removed from the extract.
          Choose from the paragraphs A – G the one which fits each gap. There is
          one extra paragraph which you do not need to use.
        </Task>
        <Hr />
        <Title>Macquarie Island </Title>
        <SubTitle>
          Journalist Matthew Denholm joins a group of scientists, attempting to
          save Macquarie Island, which lies halfway between Australia and
          Antarctica.
        </SubTitle>
        <Body>
          <Column>
            <Paragraph>
              I am stumbling, blinded by tiny missiles of ice and snow driven
              horizontally into my face by a howling gale. One minute I’m blown
              backwards. The next I’m leaping skyward in undignified panic as a
              foot narrowly misses an outraged elephant seal. Squinting
              painfully through torchlight, I’ve little hope of seeing the
              beasts.
            </Paragraph>
            <Dropdown
              id={0}
              options={optionList}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[0].isHighlighted}
              onClick={() => this.onDropdownClick(0)}
            />
            <Paragraph>
              Later, inside a cosy hut, sporting a patch over the sorer of my
              eyes, I have to admit that it probably is. This is, after all, the
              sub-Antarctic. Or to be precise, Macquarie Island: a sliver of
              land conjured abruptly from the vast wilderness of the Southern
              Ocean. The darkest, coldest months are generally the quietest time
              of year for human activity here, but this year is different. I’m
              with a team of scientists who are undertaking a seemingly
              impossible task: to rid the entire island of every rabbit, rat and
              mouse.
            </Paragraph>
            <Dropdown
              id={1}
              options={optionList}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[1].isHighlighted}
              onClick={() => this.onDropdownClick(1)}
            />
            <Paragraph>
              Next morning, I abruptly change my mind, however, when I awake to
              a view that justifies the three-day voyage to this remote outpost
              of Australia. After overnight snowfalls the island is painted
              white, from highland plateaus, with frozen lakes, to rocky black
              sand and pebble shore. All glistens in rare sub-Antarctic
              sunshine. Besides, the previous afternoon’s discomforts were
              entirely our own fault.
            </Paragraph>
            <Dropdown
              id={2}
              options={optionList}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[2].isHighlighted}
              onClick={() => this.onDropdownClick(2)}
            />
            <Paragraph>
              The delay while we doubled back made it impossible to reach the
              hut before dusk. I had also blundered, deciding snow goggles were
              unnecessary. We had been taught a valuable lesson. While
              officially part of Australia, this island is a different world.
              Different rules apply. Every move must be planned and precautions
              taken because of the dangers posed by climate and terrain.
            </Paragraph>
          </Column>
          <Column>
            <div style={{ marginTop: "20px" }} />
            <Dropdown
              id={3}
              options={optionList}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[3].isHighlighted}
              onClick={() => this.onDropdownClick(3)}
            />

            <Paragraph>
              This extreme isolation means no activity is easy on the island.
              Our first challenge was getting ashore as there is no safe
              anchorage. But when we eventually reached the beach, I could
              instantly see that the island’s reputation as ‘the Galápagos of
              the south’ is justified. Over the next few days, seals, penguins
              and a host of seabirds are a constant presence. As in the
              Galápagos Islands, some species are abundant – there are an
              estimated 100,000 seals and four million penguins. Though hunted
              in the past, these days the main threat to the island’s fauna
              comes not from man but from our legacy.
            </Paragraph>
            <Dropdown
              id={4}
              options={optionList}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[4].isHighlighted}
              onClick={() => this.onDropdownClick(4)}
            />
            <Paragraph>
              Unaccustomed to the herbivores’ teeth, the island flora has been
              overgrazed and reduced to stubble. The hills and plateaus are
              pock-marked with holes and soft surfaces are undermined by their
              burrows. On this treeless island, the overgrazing has also left
              the homes of native birds exposed. Petrel and albatross chicks are
              thus more vulnerable to predation and the harsh elements. The
              devastation reached such a point that in 2007 the World Heritage
              Convention discussed whether the island should lose its World
              Heritage status.
            </Paragraph>
            <Dropdown
              id={5}
              options={optionList}
              changeHandler={this.changeHandler}
              isHighlighted={dropdowns[5].isHighlighted}
              onClick={() => this.onDropdownClick(5)}
            />
            <Paragraph>
              However, the status was also conferred because of its ‘outstanding
              natural beauty and aesthetic importance’. Given that the wild
              hillsides that should be lushly covered are bare, and are animated
              not by the movement of wind in tussock but by rabbits running
              amok, it is not surprising that the world was beginning to ask
              whether the description still applied.
            </Paragraph>
          </Column>
        </Body>
        <Options>
          <Column>
            <Paragraph>
              <SectionLetter>A</SectionLetter>{" "}
              <i>
                This is mainly in the form of rabbits. Introduced in 1877 as a
                food source, they took to the island with gusto. Recent
                estimates of the rabbit population, before the eradication
                program began, ranged from 100,000 to 150,000.
              </i>
            </Paragraph>
            <Paragraph>
              <SectionLetter>B</SectionLetter>{" "}
              <i>
                It’s a realisation that makes all the more impressive the
                endeavours of the first explorers to come here. Here at Brothers
                Point, perched on a headland off the island’s east coast, we
                could be the last humans on Earth. In a geographical sense, we
                very nearly are.
              </i>
            </Paragraph>
            <Paragraph>
              <SectionLetter>C</SectionLetter>{" "}
              <i>
                The walk – just under 10km from the research station to the
                cabin – wasn’t meant to be in darkness. Some time after setting
                out, however, my photographer realised he had left a piece of
                camera equipment behind.
              </i>
            </Paragraph>
            <Paragraph>
              <SectionLetter>D</SectionLetter>{" "}
              <i>
                It’s one of the most ambitious programs of its type ever
                attempted. A worthy project indeed, but as the intense winds
                rage outside, I can empathise with Captain Douglass, an early
                visitor to the island. Arriving in 1822, Douglass called
                Macquarie ‘the most wretched place’.
              </i>
            </Paragraph>
          </Column>
          <Column>
            <Paragraph>
              <SectionLetter>E</SectionLetter>{" "}
              <i>
                The resultant landslips have devastating consequences. They have
                harmed hundreds of penguins as well as destroying nesting sites
                leaving local wildlife at risk. I begin to realise just how
                damaged this wilderness is.
              </i>
            </Paragraph>
            <Paragraph>
              <SectionLetter>F</SectionLetter>{" "}
              <i>
                At night, they are indistinguishable from the rocks that cover
                the ground; only their gurgling barks tell me when to jump. As I
                lose feeling in my fingers, numbed by glacial temperatures, I
                ask myself: Is this what I sailed to the bottom of the world
                for?
              </i>
            </Paragraph>
            <Paragraph>
              <SectionLetter>G</SectionLetter>
              <i>
                {" "}
                Macquarie achieved the listing 10 years earlier, partly in
                recognition of the fact that it is a geological freak. The
                island is ocean floor forced to the surface by the convergence
                of two tectonic plates – an ongoing process.
              </i>
            </Paragraph>
          </Column>
        </Options>
        <AnswerButton onClick={this.onClick}>Next</AnswerButton>
      </Wrap>
    );
  }
}

export default ReadingB2;

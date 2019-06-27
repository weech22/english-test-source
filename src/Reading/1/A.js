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
  Title
} from "../../UI/styles";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const OptionList = styled.ol``;

const LI = styled.li`
  margin-bottom: 1.4em;
  color: palevioletred;
  font-weight: bold;
`;

const OptionText = styled.span`
  color: black;
  font-weight: normal;
  font-style: italic;
`;

const keys = ["E", "B", "G", "F", "D", "A"];
const optionList = ["A", "B", "C", "D", "E", "F", "G"];

class ReadingA1 extends Component {
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
      this.props.stageSwitcher("Reading II");
    }
  };

  render() {
    const { dropdowns } = this.state;

    return (
      <Wrap>
        <Header>
          <Task>
            You are going to read a newspaper article about the man who designed
            the recycling symbol. Six sentences have been removed from the
            article. Choose from the sentences A – G the one which fits each
            gap. There is one extra sentence which you do not need to use.
          </Task>

          <Hr />

          <Title>
            <span>How the recycling</span>
            <span>symbol was created</span>
          </Title>
          <SubTitle>
            Gary Anderson designed a symbol which we see everywhere nowadays.
          </SubTitle>
        </Header>
        <Body>
          <Column>
            <Paragraph>
              I studied engineering at the University of Southern California at
              a time when there was a lot of emphasis in the United States on
              training young people to be engineers. That said, I eventually
              switched to architecture. I just couldn’t get a grasp on
              electronics and architecture seemed more concrete to me.
            </Paragraph>
            <Paragraph>
              It was around that time that I saw a poster advertising a design
              competition being run by the Container Corporation of America. The
              idea was to create a symbol to represent recycled paper. One of my
              college requirements had been a graphic design course so I thought
              I’d give it a go. It didn’t take me long to come up with my
              design: only a day or two.{" "}
              <Dropdown
                id={0}
                options={optionList}
                changeHandler={this.changeHandler}
                isHighlighted={dropdowns[0].isHighlighted}
                onClick={() => this.onDropdownClick(0)}
              />{" "}
              But I already had arrows and angles in my mind because on my
              course I’d done a presentation on recycling waste water. I’d come
              up with a graphic that described this process very simply.
            </Paragraph>
            <Paragraph>
              The problem with the design I’d done earlier was that it seemed
              flat, two-dimensional. So when I sat down to enter the
              competition, I thought back to a field trip in elementary school
              to a newspaper office where we’d been shown how paper was fed over
              rollers as it was printed.{" "}
              <Dropdown
                id={1}
                options={optionList}
                changeHandler={this.changeHandler}
                isHighlighted={dropdowns[1].isHighlighted}
                onClick={() => this.onDropdownClick(1)}
              />{" "}
              The three arrows in it look like strips of folded-over paper. I
              drew them in pencil, and then traced over everything in black ink.
              These days, with computer graphics packages, it’s rare that
              designs are quite so plain.
            </Paragraph>
          </Column>
          <Column>
            <Paragraph>
              I think I found out I’d won the competition in a letter. Was I
              excited? Well, yes of course – but not that excited.{" "}
              <Dropdown
                id={2}
                options={optionList}
                changeHandler={this.changeHandler}
                isHighlighted={dropdowns[2].isHighlighted}
                onClick={() => this.onDropdownClick(2)}
              />{" "}
              So it just seemed like, of course I would win! There was a
              monetary prize, though for the life of me I can’t remember how
              much it was... about $2,000?
            </Paragraph>
            <Paragraph>
              When I finished my studies, I decided to go into urban planning
              and I moved to Los Angeles. It seems funny, but I really played
              down the fact that I’d won this competition. I was afraid it would
              make me look as though I was interested in graphics, rather than
              urban planning.{" "}
              <Dropdown
                id={3}
                options={optionList}
                changeHandler={this.changeHandler}
                isHighlighted={dropdowns[3].isHighlighted}
                onClick={() => this.onDropdownClick(3)}
              />{" "}
              I remember seeing it once on a leaflet which had been produced on
              recycled paper, but then it disappeared.
            </Paragraph>
            <Paragraph>
              A while after graduating, I flew to Amsterdam for a holiday. I’ll
              never forget: when I walked off the plane, I saw my symbol. It was
              on a big recycling bin. And it was bigger than a beach ball!{" "}
              <Dropdown
                id={4}
                options={optionList}
                changeHandler={this.changeHandler}
                isHighlighted={dropdowns[4].isHighlighted}
                onClick={() => this.onDropdownClick(4)}
              />{" "}
              I was really taken aback. That was quite a long time ago though.
              Since then, I’ve got more qualifications and worked for quite a
              few different firms, some more environmentally aware than others.
            </Paragraph>
            <Paragraph>
              I feel much prouder of the recycling symbol now than I used to,
              probably because it’s so widely seen. Maybe this design has been
              more important to me than I’d thought.{" "}
              <Dropdown
                id={5}
                options={optionList}
                changeHandler={this.changeHandler}
                isHighlighted={dropdowns[5].isHighlighted}
                onClick={() => this.onDropdownClick(5)}
              />{" "}
              There’s more to me than the recycling symbol.
            </Paragraph>
          </Column>
        </Body>
        <Options>
          <div>
            <OptionList type="A">
              <LI>
                <OptionText>
                  Still, I’d hate to think that my Life’s work is defined by it.
                </OptionText>
              </LI>
              <LI>
                <OptionText>
                  I used what I’d seen to create the image.
                </OptionText>
              </LI>
              <LI>
                <OptionText>
                  I’m no expert on recycling but I can certainly see its value.
                </OptionText>
              </LI>
              <LI>
                <OptionText>
                  I hadn’t thought about it for years and there it was right in
                  my face.
                </OptionText>
              </LI>
            </OptionList>
          </div>
          <div>
            <OptionList type="A">
              <LI value="5">
                <OptionText>
                  I realise that seems ridiculous for something that’s been so
                  successful.
                </OptionText>
              </LI>
              <LI>
                <OptionText>
                  Also, nothing much happened to the symbol for a while.
                </OptionText>
              </LI>
              <LI>
                <OptionText>
                  I guess at that point in my life I had an exaggerated sense of
                  my own importance.
                </OptionText>
              </LI>
            </OptionList>
          </div>
        </Options>

        <AnswerButton onClick={this.onClick}>Next</AnswerButton>
      </Wrap>
    );
  }
}

export default ReadingA1;

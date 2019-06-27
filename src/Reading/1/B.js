import React, { Component } from "react";
import styled from "styled-components";
import Question from "../../UI/Question";
import { Hr, Task, Paragraph, SubTitle, Wrap, Title } from "../../UI/styles";
import questions from "./questions";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.span`
  color: ${props => (props.activeQuestion === 3 ? "palevioletred" : "black")};
  text-decoration: ${props =>
    props.activeQuestion === 3 ? "underline" : "none"};
`;

const Highlight2 = styled.span`
  color: ${props => (props.activeQuestion === 5 ? "palevioletred" : "black")};
  text-decoration: ${props =>
    props.activeQuestion === 5 ? "underline" : "none"};
`;

class ReadingB1 extends Component {
  state = {
    questionCount: 6,
    activeQuestion: 0
  };

  questionCounter = () => {
    if (this.state.activeQuestion < this.state.questionCount - 1) {
      this.setState({ activeQuestion: this.state.activeQuestion + 1 });
    } else {
      this.props.stageSwitcher("Reading II");
    }
  };
  render() {
    const { activeQuestion } = this.state;
    return (
      <Wrap>
        <Task>
          You are going to read an article about a woman who trains actors in
          fighting skills. For the following questions, choose the answer (A, B,
          C or D) which you think fits best according to the text.
        </Task>
        <Hr />
        <Header>
          <Title>Kombat Kate</Title>
          <SubTitle>
            James Stanton meets ‘Kombat Kate’ Waters, who trains theatre actors
            in how to ‘fight’ on stage.
          </SubTitle>
        </Header>
        <Body>
          <Paragraph>
            There must be few occasions when it would be really rude to refuse
            an invitation to head-butt someone you’ve just met! But I’m in one
            of those right now. I’m in a rehearsal room in a theatre with a
            group of actors, facing up to stage fighting director Kate Waters.
            I’ve already dragged her around the room and slapped her on the arm.
            Now she wants me to head-butt her. But fear not, this is all
            strictly pretend!
          </Paragraph>
          <Paragraph>
            ‘Imagine there’s a tin can on my shoulder,’ she says. ‘Now try to
            knock it off.’ I lower my head as instructed, then lift it sharply,
            aiming for the imaginary can, hoping desperately that I don’t
            miscalculate the angle and end up doing damage to her face. To my
            amazement, I get it right. ‘That was good,’ says Waters. ‘Now maybe
            try it again without smiling.’
          </Paragraph>
          <Paragraph>
            Waters, known in the industry as Kombat Kate, is showing me how
            actors fight each other without getting hurt, and that includes
            sword-fighting. (She inspires fierce devotion: when I tweet that I’m
            meeting Waters, one actress friend responds: ‘She’s amazing. She
            taught me how to be a secret service agent in two days.’)
          </Paragraph>
          <Paragraph>
            Perhaps the most famous play Kate has worked on recently was called
            Noises Off. She taught the cast how to fall down stairs without
            breaking any bones. One of the fight scenes is fairly close, Kate
            tells me, to the one we’re trying out now. ‘I’ve just slowed it down
            a bit,’ she says tactfully, before inviting me to throw her against
            the wall. I obey, making sure I let go of her quickly, so she can
            control her own movement. Push your opponent too hard, and they will
            hit the wall for real. I watch her hit the wall before falling to
            the ground. She’s fine, of course. ‘That’s my party trick,’ she says
            with a grin. ‘Works every time.’
          </Paragraph>
          <Paragraph>
            Once the lesson is over Kate tells me how she became one of only two
            women on the official register of stage fight directors. Already a
            keen martial arts expert from childhood, Kate did drama at
            university, and one module of her course introduced her to stage
            combat. When she made enquiries about the possibility of teaching it
            as a career, she was told about the register and the qualifications
            she’d need to be accepted onto it. It was{" "}
            <Highlight activeQuestion={activeQuestion}>
              no small order
            </Highlight>
            : as well as a certificate in advanced stage combat, she would need
            a black belt in karate and proficiency in fencing, a sport she’d
            never tried before.
          </Paragraph>
          <Paragraph>
            But she rose to the challenge and taught the subject for several
            years at a drama college before going freelance and becoming a fight
            advisor for the theatrical world. The play she’s working on is
            Shakespeare’s Richard III. This involves a famous sword fight. With
            no instructions left by the great playwright other than – Enter
            Richard and Richmond: they fight, Richard dies – the style and
            sequence of the fight is down to Kate and the actors.
          </Paragraph>
          <Paragraph>
            I try to get as much information as possible about what a fight
            would have been like in a particular period,’ Kate explains.{" "}
            <Highlight2 activeQuestion={activeQuestion}>
              {" "}
              ‘But because what I’m eventually doing is telling a dramatic
              story, not all of it is useful.
            </Highlight2>
            The scene has to be exciting and do something for the audience.’
          </Paragraph>
          <Paragraph>
            Ultimately, of course, a stage fight is all smoke and mirrors. In
            our lesson, Kate shows me how an actor will stand with his or her
            back to the audience ahead of a choreographed slap or punch. When
            the slap comes it makes contact not with skin but with air: the
            actor whacks his chest or leg to make the sound of the slap.
          </Paragraph>
          <Paragraph>
            In the rehearsal room, I can’t resist asking Kate how she thinks she
            would fare in a real fight. Would she give her attacker a hard time?
            She laughs, ‘Oh, I’d be awful,’ she says. ‘I only know how to fake
            it.’ I can’t help thinking, however, that she’s just being rather
            modest.
          </Paragraph>
        </Body>
        <Hr />
        <div>
          <Question
            question={questions[activeQuestion]}
            pointsCounter={this.props.pointsCounter}
            questionCounter={this.questionCounter}
            type="list"
          />
        </div>
      </Wrap>
    );
  }
}

export default ReadingB1;

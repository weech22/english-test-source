import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  text-align: center;
`;
const Points = styled.span``;
const Caption = styled.span`
  font-size: 26px;
`;
const TimeIsUp = styled.div`
  text-align: center;
`;

const pluralize = points => {
  return (points >= 5 && points <= 20) ||
    (points >= 25 && points <= 30) ||
    (points >= 35 && points <= 38) ||
    points === 0
    ? "баллов"
    : points === 1 || points === 21 || points === 31
    ? "балл"
    : (points > 10 && points % 10 === 2) ||
      points % 10 === 3 ||
      points % 10 === 4 ||
      points === 2 ||
      points === 3 ||
      points === 4
    ? "балла"
    : "";
};

class ResultScreen extends Component {
  sendResults = () => {
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = process.env;

    const { userData, points } = this.props;

    const dataToSend = {
      ...userData,
      points,
      receiverEmail
    };

    const { name, school, grade, email, phone } = userData;

    fetch(
      `https://english-test22.000webhostapp.com/newParticipant.php?name=${name}&email=${email}&school=${school}&grade=${grade}&points=${points}&phone=${phone}`,
      {
        method: "GET"
      }
    );

    window.emailjs.send("mailgun", template, dataToSend);
  };

  componentDidMount = () => {
    this.sendResults();
  };

  render() {
    return (
      <Wrap>
        {this.props.isTimeUp && (
          <TimeIsUp>Время на выполнение теста закончилось.</TimeIsUp>
        )}
        <br />
        <Caption>
          Благодарим за прохождение теста! Вы набрали{" "}
          <Points>{this.props.points}</Points> {pluralize(this.props.points)}.
        </Caption>
      </Wrap>
    );
  }
}

export default ResultScreen;

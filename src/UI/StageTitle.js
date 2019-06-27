import React from "react";
import styled from "styled-components";

const StageTitle = styled.span`
  font-size: 34px;
  color: palevioletred;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
`;

export default props => <StageTitle>{props.stage}</StageTitle>;

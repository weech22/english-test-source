import styled from "styled-components";

export const Hr = styled.hr`
  border-top: 2px dashed palevioletred;
  width: 100%;
`;

export const Task = styled.div`
  margin: 1.5em 0;
  padding: 0 3em;
`;

export const AnswerButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: palevioletred;
  outline: none;
  color: white;
  padding: 7px;
  cursor: pointer;
  &:hover {
    background-color: #fa7493;
  }
  width: 30%;
  border: 1px solid black;
`;

export const Paragraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5em;
`;

export const Options = styled.div`
  border: 2px dashed palevioletred;
  display: flex;
  margin: 0 40px;
  margin-bottom: 30px;
  justify-content: space-between;
  padding: 0 5%;
`;

export const SubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 58%;
  font-style: italic;
  text-align: center;
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionLetter = styled.span`
  font-size: 26px;
  color: palevioletred;
  font-weight: bold;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

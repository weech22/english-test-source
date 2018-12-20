import React, { Component } from "react";
import styled from "styled-components";
import Sound from "react-sound";
import questionList from "./listeningQuestions";
import Question from "./Question";

const Audio = styled.div``;

class Listening extends Component {
  render() {
    return (
      <div>
        <Audio>
          <Sound
            url="A.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={0}
          />
        </Audio>
      </div>
    );
  }
}

export default Listening;

/* 
onLoading = { this.handleSongLoading }
onPlaying = { this.handleSongPlaying }
onFinishedPlaying = { this.handleSongFinishedPlaying }  */

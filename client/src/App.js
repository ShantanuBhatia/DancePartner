import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SongTitleView from './components/SongTitleView.jsx';
import VideoPlayerView from './components/VideoPlayerView.jsx';
import SongSelectionScreen from './components/SongSelectionScreen.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      songtitle: "Yes or Yes",
      song_id: "Nl4BJ2TDmWE"
    };
  }
  render() {
    return (
      <div className="App">
        <SongTitleView title={this.state.songtitle}/>
        <VideoPlayerView title={this.state.songtitle} video_id={this.state.song_id} vid_width={640} vid_height={360} />
        <SongSelectionScreen />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

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
        <h1>Pick a song to begin</h1>
    );
  }
}

export default App;

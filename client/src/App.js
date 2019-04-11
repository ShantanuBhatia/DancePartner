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
      song_id: "Nl4BJ2TDmWE",
      data: "The server failed to connect",
    };
  }

  componentDidMount(){
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div>
        <h1>Pick a song to begin</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;

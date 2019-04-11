import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SongTitleView from './components/SongTitleView.jsx';
import VideoPlayerView from './components/VideoPlayerView.jsx';
import MobileController from './components/MobileController.jsx';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        
        <div className="App">
            <h1>Welcome to DancePartner!</h1>
            <ul className="navbar">
                <NavLink to="/" className="btn btn-primary">Home</NavLink>
                <NavLink to="/twice" className="btn btn-primary">Yes Or Yes - Twice</NavLink>
                <NavLink to="/pentagon" className="btn btn-primary">Shine - Pentagon</NavLink>
                <NavLink to="/nct" className="btn btn-primary">Boss - NCT U</NavLink>
                <NavLink to="/mobile" className="btn btn-primary">Phone Menu</NavLink>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/title" component={SongTitleView} />
            <Route path="/twice" render={() => <VideoPlayerView  title={"Yes or Yes"} video_id={"Nl4BJ2TDmWE"} vid_width={640} vid_height={360} short={"yory"}/>} />
            <Route path="/pentagon" render={() => <VideoPlayerView  title={"Shine"} video_id={"6_v8n_zb5ak"} vid_width={640} vid_height={360} short={"shine"} />} />
            <Route path="/nct" render={() => <VideoPlayerView  title={"Boss"} video_id={"-7tSTUR7FG0"} vid_width={640} vid_height={360} short={"nct"} />} />
            <Route path="/mobile" component={MobileController} />
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

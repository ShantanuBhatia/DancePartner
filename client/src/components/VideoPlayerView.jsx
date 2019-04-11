import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkerList from './MarkerList.jsx';
import '../css/vidStyles.css';
class VideoPlayerView extends Component {
    constructor(props) {
        super(props);

        // youtube API setup
        var tag = document.createElement('script');
        tag.id = 'iframe-test';
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.state = {
            items: [],
            danceVid: "VIDEO NOT SET"
        };

        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        // var tag = document.createElement('script');
        // console.log("Is this synchronous?");
        // tag.id = 'iframe-test';
        // tag.src = 'https://www.youtube.com/iframe_api';
        // console.log("But actually, what happens first");
        // var firstScriptTag = document.getElementsByTagName('script')[0];
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window['onYouTubeIframeAPIReady'] = (e) => {
            this.YT = window['YT'];
            this.reframed = false;
            
            this.danceVid = new window['YT'].Player('dancesong');
            this.setState({danceVid: this.danceVid})
            console.log("MOUNTED!");
        };
    }


    handleSubmit(e) {
        console.log("State vid: " + this.state.danceVid);


        e.preventDefault();
        // if (!this.state.text.length) {
        //     return;
        // }
        const newItem = {
            timestamp: this.state.danceVid.getCurrentTime(),
            id: Date.now(),
            vidReference: this.state.danceVid
        };
        console.log("adding " + newItem)
        this.setState(state => ({
            items: state.items.concat(newItem),
        }));
    }

    setCorrectVid(){
        window['onYouTubeIframeAPIReady'] = (e) => {
            this.YT = window['YT'];
            this.reframed = false;
            
            this.danceVid = new window['YT'].Player('dancesong');
            this.setState({danceVid: this.danceVid})
            console.log("set_function_mounted!!");
        };
    }

    youtube_url = (video_id) => {return "https://www.youtube.com/embed/" + video_id + "?enablejsapi=1"};
    render(){
        return (
        <div id="video-player-container">
        <iframe id="dancesong" 
                ref="dancesong"
                title = {this.props.songtitle}
                width={this.props.vid_width} height={this.props.vid_height}
                src={this.youtube_url(this.props.video_id)}
                frameBorder="0"        
        ></iframe>
        <form onSubmit={this.handleSubmit}>
          <button  type="submit" className="btn btn-primary">
            Add a Marker Here
          </button>
        </form>
        <h3>Markers</h3>
        <div className="row marker-list">
            <div style={{width: "50vw"}}>
                <MarkerList items={this.state.items} />
            </div>
        </div>

        </div>
        );
    }
}

export default VideoPlayerView;
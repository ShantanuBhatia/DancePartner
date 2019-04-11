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
            danceVid: "VIDEO NOT SET",
            counter: 0,
        };

        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setCorrectVid = this.setCorrectVid.bind(this);
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
            
            this.danceVid = new window['YT'].Player(this.shortref());
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
            video_id: this.props.video_id,
            vidReference: this.state.danceVid
        };
        console.log(newItem)
        this.setState(state => ({
            items: state.items.concat(newItem),
        }));
    }

    setCorrectVid(){
            this.YT = window['YT'];
            this.reframed = false;
            
            this.danceVid = new window['YT'].Player(this.shortref());
            this.setState({danceVid: this.danceVid})
            console.log("SCV mounted");
    }
    shortref = () => {return "dancesong_" + this.props.short}
    youtube_url = (video_id) => {return "https://www.youtube.com/embed/" + video_id + "?enablejsapi=1"};
    
    
    render(){
        // console.log("Rendering vid");
        // let YT = window['YT'];
        // let reframed = false;
        // let danceVidNew = new window['YT'].Player(this.shortref());
        // this.setState({danceVid: this.danceVid});
        // this.setCorrectVid();
        return (
        <div id="video-player-container">
        <h5>Your player code is: {this.props.short}</h5>
        <iframe 
                id={this.shortref()}
                ref={this.shortref()}
                title = {this.props.songtitle}
                width={this.props.vid_width} height={this.props.vid_height}
                src={this.youtube_url(this.props.video_id)}
                frameBorder="0"       
                onLoad={this.setCorrectVid} 
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
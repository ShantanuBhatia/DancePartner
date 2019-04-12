import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkerList from './MarkerList.jsx';
import '../css/vidStyles.css';
import axios from 'axios';
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
        this.refreshList = this.refreshList.bind(this);
    }


    componentDidMount(){
        // var tag = document.createElement('script');
        // console.log("Is this synchronous?");
        // tag.id = 'iframe-test';
        // tag.src = 'https://www.youtube.com/iframe_api';
        // console.log("But actually, what happens first");
        // var firstScriptTag = document.getElementsByTagName('script')[0];
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // window['onYouTubeIframeAPIReady'] = (e) => {
        //     this.YT = window['YT'];
        //     this.reframed = false;
            
        //     this.danceVid = new window['YT'].Player(this.shortref());
        //     this.setState({danceVid: this.danceVid})
        //     console.log("MOUNTED!");
        // };

        axios.get(`/song/${this.props.video_id}`)
        .then((res)=>{
            const markers = res.data;
            console.log("Got markers!");
            console.log(markers);
            this.setState({items: markers});
        })
        .catch((err)=>{console.error(err)})
    }


    handleSubmit(e) {
        console.log(this.state.danceVid);


        e.preventDefault();
        // if (!this.state.text.length) {
        //     return;
        // }
        const newItem = {
            timestamp: this.state.danceVid.getCurrentTime(),
            markerID: "M" + Date.now(),
            videoID: this.props.video_id,
            title: "Marker at "+this.state.danceVid.getCurrentTime(),
            // vidReference: this.state.danceVid
        };
        console.log(newItem)
        this.setState(state => ({
            items: state.items.concat(newItem),
        }));
        axios.post('/pushmarker', newItem)
        .then((response) => {console.log(response)})
        .catch((err)=>{console.error(err)})
    }


    refreshList(e) {
        e.preventDefault();
        console.log("A refresh was requested");
        axios.get(`/song/${this.props.video_id}`)
        .then((res)=>{
            const markers = res.data;
            console.log(markers);
            this.setState({items: markers});
        })
        .catch((err)=>{console.error(err)})
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
                <MarkerList items={this.state.items} vidReference={this.state.danceVid}/>
            </div>
        </div>
        <form onSubmit={this.refreshList}>
          <button  type="submit" className="btn btn-primary">
            Reload List
          </button>
        </form>
        </div>
        );
    }
}

export default VideoPlayerView;
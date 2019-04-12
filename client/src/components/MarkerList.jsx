import React, { Component } from 'react';
import DanceMarker from './DanceMarker.jsx';

class MarkerList extends Component {
    render(){
        return (
            <ul className="list-group">
                {this.props.items.map(item => (
                <DanceMarker key={item.markerID} timestamp={item.timestamp} vidID={item.videoID} vidReference={this.props.vidReference} markerID={item.markerID} label={item.title}/>
                ))}
            </ul>
        );
    }
}

export default MarkerList;
import React, { Component } from 'react';
import ControllerDanceMarker from './ControllerDanceMarker.jsx';

class ControllerMarkerList extends Component {
    render(){
        return (
            <ul className="list-group">
                {this.props.items.map(item => (
                <DanceMarker key = {item.id} timestamp={item.timestamp} vidReference={item.vidReference} />
                ))}
            </ul>
        );
    }
}

export default ControllerMarkerList;
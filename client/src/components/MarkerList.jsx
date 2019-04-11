import React, { Component } from 'react';
import DanceMarker from './DanceMarker.jsx';

class MarkerList extends Component {
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

export default MarkerList;
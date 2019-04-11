import React, { Component } from 'react';

class SongTitleView extends Component {
    render(){
        return (
            <div id="dance-practice-title-container">
            <h1>Dance Practice!</h1>
            <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default SongTitleView;
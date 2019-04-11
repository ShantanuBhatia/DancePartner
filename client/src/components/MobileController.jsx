import React, { Component } from 'react';
import ControllerMarkerList from './MarkerList.jsx';

class MobileController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            vidName: null,
            vidSet: false,
        };
    }


    render(){
        if(this.state.vidSet == false){
            return (
                <div className="phone-menu">
                    <h1>Smartphone Controller</h1>
                    <p>Select a video to begin</p>
                </div>
            );
        }
        else{
            return(
                <div className="row marker-list">
                    <div style={{width: "50vw"}}>
                        <ControllerMarkerList items={this.state.items} />
                    </div>
                </div>
            );
        }
    }
}


export default MobileController;
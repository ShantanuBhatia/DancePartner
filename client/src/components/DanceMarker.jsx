import React, { Component } from 'react';

class DanceMarker extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            label: "Marker at " + this.props.timestamp,
            editMode: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // if the "rename is clicked, then instead we should render a textfield where the default "

    enterEditMode = (e) => {
        e.preventDefault();
        this.setState({editMode: true});
        e.stopPropagation();
    }

    goToMarker = (e) => {
        if(e.target.className !== "btn btn-info" && e.target.className !== "form-control"){
            this.props.vidReference.seekTo(this.props.timestamp);
        } 
    }


    handleChange(e) {
        this.setState({ label: e.target.value });
        e.stopPropagation();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({editMode:false})
        e.stopPropagation();
    }

    captureclick(e) {
        e.stopPropagation();
    }
    render(){
        if(this.state.editMode) {
            return(
            <li className="list-group-item list-group-item-primary" onClick={this.goToMarker}>
                <form onSubmit={this.handleSubmit} >
                    <button type="submit" className="btn btn-info" style={{"display": "inline-block", "float":"right"}} onclick = {this.captureclick}>Rename</button>
                    <div className="col-sm-4 col-offset-sm-4" >
                    <input
                        className="form-control" 
                        style={{"display": "inline-block", "float":"left"}}
                        id="new-label"
                        default={this.state.label}
                        onChange={this.handleChange}
                        value={this.state.label}
                        onclick = {this.captureclick}
                    />
                    </div>
                </form>
                
                
                
            </li>
            );
        }
        else {
            return (
            <li className="list-group-item list-group-item-primary" onClick={this.goToMarker}>
                <button className="btn btn-info" style={{"display": "inline-block", "float":"right"}} onClick={this.enterEditMode}>Rename</button>
                <p className="text-center" style={{"display": "inline-block"}} >{this.state.label}</p>
                <p className="text-right" style={{"display": "inline-block", "float":"left"}}>Delete</p>
            </li>

        );
        }
        
    }
}

export default DanceMarker;
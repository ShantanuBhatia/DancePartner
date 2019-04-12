import React, { Component } from 'react';
import axios from 'axios';
class DanceMarker extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            label: "Marker at " + this.props.timestamp,
            editMode: false,
            markedForDelete: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // if the "rename is clicked, then instead we should render a textfield where the default "
    componentDidMount(){
        this.setState({label: this.props.label})
    }
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
        axios.post('/updatemarker', {cmd: `UPDATE markers SET title="${this.state.label}" WHERE markerID="${this.props.markerid}";`})
        .then((response) => {console.log(response)})
        .catch((err)=>{console.error(err)})

        // "UPDATE markers SET title=" + this.state.label + " WHERE markerID=" + this.props.markerid
        
        e.stopPropagation();
    }

    captureclick(e) {
        e.stopPropagation();
    }

    doNothing(e){
        e.stopPropagation();
    }
    handleDelete(e) {
        e.preventDefault();
        console.log("AAAAAAAAAAAAA!!!!!");
        console.log(`/remove/${this.props.markerID}`);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!");
        this.setState({markedForDelete: true});
        axios.post(`/remove/${this.props.markerID}`)
        .then((response) => {console.log(response)})
        .catch((err)=>{console.error(err)})
        // axios.post()
    }
    render(){
        if(this.state.markedForDelete){
            return(
                <li className="list-group-item list-group-item-danger">
                    <p className="text-center" style={{"display": "inline-block"}} >Click the Reload List button to remove</p>
                </li>
                );
        }
        else { 
            if(this.state.editMode) {
                return(
                <li className="list-group-item list-group-item-primary" onClick={this.goToMarker}>
                    <form onSubmit={this.handleSubmit} >
                        <button type="submit" className="btn btn-info" style={{"display": "inline-block", "float":"right"}} onClick = {this.captureclick}>Rename</button>
                        <div className="col-sm-4 col-offset-sm-4" >
                        <input
                            className="form-control" 
                            style={{"display": "inline-block", "float":"left"}}
                            id="new-label"
                            default={this.state.label}
                            onChange={this.handleChange}
                            value={this.state.label}
                            onClick = {this.captureclick}
                        />
                        </div>
                    </form>
                    
                    
                    
                </li>
                );
            }
            else {
                console.log("I am a marker on video " + this.props.vidID)
                return (
                <li className="list-group-item list-group-item-primary" onClick={this.goToMarker}>
                    <button className="btn btn-info" style={{"display": "inline-block", "float":"right"}} onClick={this.enterEditMode}>Rename</button>
                    <p className="text-center" style={{"display": "inline-block"}} >{this.state.label}</p>
                    <p className="btn btn-danger" style={{"display": "inline-block", "float":"left"}} onClick={this.handleDelete}>Delete</p>
                </li>

                );
            }
        }
        
        
    }
}

export default DanceMarker;
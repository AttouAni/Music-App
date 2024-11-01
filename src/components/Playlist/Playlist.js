import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }

        this.handleNameChange=this.handleNameChange.bind(this);
    }
    

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    

    render(){
        return(
            <div className="PlayList">
                <h2>Your Playlist name</h2>
                <br></br>
                <input 
                    onChange={this.handleNameChange}
                    defaultValue={"New Playlist"} 
                />
                <TrackList
                    tracks={this.props.playlistTracks}
                    isRemoval={true}
                    onRemove ={this.props.onRemove} 
                />
                <button className="Playlist-save"
                    onClick={this.props.onSave}
                >
                    Save to Spotify
                </button>
            </div>
        )
    }
}

export default PlayList;
import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            value:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.search=this.search.bind(this);
        this.handleEnter=this.handleEnter.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    search(){
        this.props.onSearch(this.state.value);
    }
    handleEnter(event){
        if(event.keyCode === 13){
            this.search();
        }
    }

    render(){
        return(
            <div className="SearchBar">
            <input 
                placeholder="Enter song, album, artist" 
                onChange={this.handleChange} 
                onKeyUp={this.handleEnter} />
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;
import React from 'react';
import './Home.css';

const SearchBox = (props) => {
    return (
        <div className= "search_title_container">
        <div id="search_div">
            <h2>Look For Best</h2>
            <input id = "search_bar" type ="search" placeholder ="Search a user........"/>
            <button id='search_btn' onClick={(e) => props.handleSearch(e.target.previousSibling.value)}>Search</button>
        </div>
        <div id="headline">Git Find The Fit</div>
        </div>
    );
}

export default SearchBox;

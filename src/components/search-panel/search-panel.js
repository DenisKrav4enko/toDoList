import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        const searchStyle = {
            fontSize: '20px'
        };

        return (
            <div className="search-block">
                <input
                    className="search"
                    style={searchStyle}
                    placeholder="type to search"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
            </div>
        );
    }
}
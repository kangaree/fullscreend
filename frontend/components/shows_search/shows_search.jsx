import React from 'react';

import ShowsIndex from './shows_index';

class ShowsSearch extends React.Component {
    constructor() {
        super();
        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.searchWordNone = this.searchWordNone.bind(this);
    }

    // componentDidUpdate() {
        // this.props.fetchSearchShows(' ');
    // }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchTerm.length == 0 && prevState.searchTerm.length > 0) {
            this.props.removeSearchedShows();
        }
    }

    // update() {
    //     return e => this.setState({ searchTerm: e.currentTarget.value })
    // };

    searchWordNone() {
        this.setState({ searchTerm: "" })
    }

    handleChange(e) {
        this.setState({ searchTerm: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let searchTerm = this.state.searchTerm.split(' ').join('+');
        this.props.fetchSearchShows(searchTerm);
    }

    onFocus() {
        this.setState({ searchTerm: "" });
        // this.inputField.value = "";
    }

    render() {
        let { shows, removeSearchedShows } = this.props;

        return (
            <>
                <form className="search-bar-test">
                    <input value={this.state.searchTerm} onChange={this.handleChange} onFocus={this.onFocus}/>
                    <button type="submit" onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
                </form>
                <ShowsIndex shows={shows} removeSearchedShows={removeSearchedShows} />
            </>
        );
    }
}

export default ShowsSearch;

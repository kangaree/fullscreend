import React from 'react';

import ShowsIndex from './shows_index';

class ShowsSearch extends React.Component {
    constructor() {
        super();
        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchTerm.length == 0 && prevState.searchTerm.length > 0) {
            this.props.removeSearchedShows();
        }

        if (this.state.searchTerm.length > 0 && prevState.searchTerm != this.state.searchTerm) {
            this.props.fetchSearchShows(this.state.searchTerm);
        }
    }

    handleChange(e) {
        this.setState({ searchTerm: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let searchTerm = this.state.searchTerm.split(' ').join('+');
        if (this.state.searchTerm) {this.props.fetchSearchShows(searchTerm)};
    }

    onBlur() {
        // debugger
        // this.props.removeSearchedShows();
        setTimeout(
            function () {
                this.setState({ searchTerm: "" });
            }
                .bind(this),
            150
        );
        // this.setState({ searchTerm: "" });
    }

    render() {
        let { showIds, removeSearchedShows, shows } = this.props;

        return (
            <>
                <form className="search-bar-test">
                    <input value={this.state.searchTerm} onChange={this.handleChange} onBlur={this.onBlur}/>
                    <button type="submit" onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
                </form>
                <ShowsIndex shows={shows} showIds={showIds} removeSearchedShows={removeSearchedShows} />
            </>
        );
    }
}

export default ShowsSearch;

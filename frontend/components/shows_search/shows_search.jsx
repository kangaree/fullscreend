import React from 'react';

import ShowsIndex from './shows_index';

class ShowsSearch extends React.Component {
    constructor() {
        super();
        this.state = { searchTerm: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchSearchShows('');
    }

    handleChange(e) {
        this.setState({ searchTerm: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let searchTerm = this.state.searchTerm.split(' ').join('+');
        this.props.fetchSearchShows(searchTerm);
    }

    render() {
        let { shows } = this.props;

        return (
            <div>
                <form className="search-bar-test">
                    <input value={this.state.searchTerm} onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}><i className="fas fa-search"></i></button>
                </form>
                <ShowsIndex shows={shows} />
            </div>
        );
    }
}

export default ShowsSearch;

import React from 'react';

import ShowsIndex from './shows_index';

class ShowsPopular extends React.Component {
    constructor() {
        super();
        this.state = { page: 1 };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPopularShows(1);
    }

    // handleChange(e) {
    //     this.setState({ searchTerm: e.currentTarget.value });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     let searchTerm = this.state.searchTerm.split(' ').join('+');
    //     this.props.fetchSearchShows(searchTerm);
    // }

    render() {
        let { shows } = this.props;

        return (
            <>
                <ShowsIndex shows={shows} />
            </>
        );
    }
}

export default ShowsPopular;

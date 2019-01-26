import React from 'react';

import ShowsIndex from './shows_index';

class ShowsPopular extends React.Component {
    constructor() {
        super();
        this.state = { page: 1 };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate() {
        // this.props.fetchSearchShows(' ');
    // }

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
        this.props.fetchPopularShows(1);

        return (
            <>
                <ShowsIndex shows={shows} />
            </>
        );
    }
}

export default ShowsPopular;

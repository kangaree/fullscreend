import React from 'react';

import ShowsIndex from './shows_index';

class ShowsPopular extends React.Component {
    constructor() {
        super();
        this.state = { page: 1 };
        this.showNextPage = this.showNextPage.bind(this);
        this.showPreviousPage = this.showPreviousPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchPopularShows(this.state.page);
    }

    showPreviousPage() {
        this.setState({ page: this.state.page - 1 })
        this.props.fetchPopularShows(this.state.page - 1);
    }

    showNextPage() {
        this.setState({ page: this.state.page + 1 })
        this.props.fetchPopularShows(this.state.page + 1);
    }

    render() {
        let { shows } = this.props;

        return (
            <>
                <ShowsIndex shows={shows} />
                <div className="pagination-buttons">
                    <button onClick={this.showPreviousPage} className="previous_page">previous</button>
                    <button onClick={this.showNextPage} className="next_page">next</button>
                </div>
            </>
        );
    }
}

export default ShowsPopular;
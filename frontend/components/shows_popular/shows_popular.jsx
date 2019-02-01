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
        window.scrollTo(0, 0);
    }

    showPreviousPage() {
        this.setState({ page: this.state.page - 1 })
        this.props.fetchPopularShows(this.state.page - 1);
        window.scrollTo(0, 0);
    }

    showNextPage() {
        this.setState({ page: this.state.page + 1 })
        this.props.fetchPopularShows(this.state.page + 1);
        window.scrollTo(0, 0);
    }

    render() {
        let { showIds, shows } = this.props;

        return (
            <>
                <ShowsIndex shows={shows} showIds={showIds}/>
                <div className="pagination-buttons">
                    <button onClick={this.showPreviousPage} className="previous-page-popular">Previous</button>
                    <button onClick={this.showNextPage} className="next-page-popular">Next</button>
                </div>
            </>
        );
    }
}

export default ShowsPopular;
import React from 'react';
import { Link } from 'react-router-dom';

import ShowsIndex from './shows_index';

class ShowsPopular extends React.Component {
    constructor() {
        super();
        this.state = { page: 1 };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.showNextPage = this.showNextPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchPopularShows(this.state.page);
    }

    // handleChange(e) {
    //     this.setState({ searchTerm: e.currentTarget.value });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     let searchTerm = this.state.searchTerm.split(' ').join('+');
    //     this.props.fetchSearchShows(searchTerm);
    // }

    showPreviousPage() {
        // debugger
        this.setState({ page: this.state.page - 1 })
        this.props.fetchPopularShows(this.state.page);
    }

    showNextPage() {
        // debugger
        this.setState({ page: this.state.page + 1 })
        this.props.fetchPopularShows(this.state.page);
    }

    render() {
        let { shows } = this.props;

        return (
            <>
                <ShowsIndex shows={shows} />
                <Link to={"/shows/page/" + (this.state.page - 1)} onClick={this.showPreviousPage} className="back_page">back</Link>
                <Link to={"/shows/page/" + (this.state.page + 1)} onClick={this.showNextPage} className="next_page">next</Link>
            </>
        );
    }
}

export default ShowsPopular;

// onClick = { this.props.closeModal } className = "close-x-login" > X</div >
//     <form onSubmit={this.handleSubmit}
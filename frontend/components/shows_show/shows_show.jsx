import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import LoadingIcon from './loading_icon';

class ShowsShow extends Component {
    componentDidMount() {
        this.props.fetchShow(this.props.match.params.showId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.showId !== this.props.match.params.showId) {
            this.props.fetchShow(this.props.match.params.showId);
        }
    }

    render() {
        const { show } = this.props;

        // if (loading) {
        //     return <section className="pokemon-detail"><LoadingIcon /></section>;
        // }

        if (!show) return null;

        return (
            <>
                <div className="blank-header"></div>
                <section className="show-index">
                    <h2>{show.name}</h2>
                    { show.overview }
                    <img src={"https://image.tmdb.org/t/p/w500/" + show.backdrop_path} />
                </section>
            </>
        );
    }
}
export default ShowsShow;
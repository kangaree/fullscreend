import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReviewFormContainer from './review_form_container';
import { ReviewLink } from '../../utils/link_util';

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
        const { show, openModal, currentUser } = this.props;

        if (!show) return null;

        if (!currentUser) {
            return (
                <>
                    <div className="backdrop" style={show.backdrop_path ?
                        { backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + show.backdrop_path})` }
                        : {}}><div className="backdrop-fade">
                            <h2 className="headline-1">{show.name}</h2>
                            <p className="headline-3">{show.overview}</p>
                        </div></div>
                    <section className="show-show">

                        <div className="show-info">
                            <p>{show.first_air_date} to {show.last_air_date} ({show.status})</p>
                            <p>{show.type}</p>
                            <p>{show.episode_run_time ? show.episode_run_time[0] : null} min</p>
                            <p>{show.number_of_seasons} Season{show.number_of_seasons == 1 ? "" : "s"}</p>
                        </div>

                    </section>
                </>
            );
        }

        return (
            <>
                <div className="backdrop" style={ show.backdrop_path ?
                        { backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + show.backdrop_path})` }
                    : {}}><div className="backdrop-fade">
                    <h2 className="headline-1">{show.name}</h2>
                    <p className="headline-3">{show.overview}</p>
                </div></div>


                <section className="show-show">
                    <div className="show-info">
                        <p>{show.first_air_date} to {show.last_air_date} ({show.status})</p>
                        <p>{show.type}</p>
                        <p>{show.episode_run_time ? show.episode_run_time[0] : null} min</p>
                        <p>{show.number_of_seasons} Season{show.number_of_seasons == 1 ? "" : "s"}</p>
                    </div>

                    <div className="center-buttons"><a className="green-button" onClick={() => openModal('review')} show={show}>log</a></div>
                </section>
            </>
        );
    }
}
export default ShowsShow;
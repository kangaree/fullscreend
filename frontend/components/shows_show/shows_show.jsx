import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReviewFormContainer from './create_review_form_container';
import { ReviewLink } from '../../utils/link_util';

// import LoadingIcon from './loading_icon';

import ReviewListItemContainer from './review_list_item_container'

class ShowsShow extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchShow(this.props.match.params.showId);
        this.props.fetchShowReviews(this.props.match.params.showId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.showId !== this.props.match.params.showId) {
            this.props.fetchShow(this.props.match.params.showId);
            this.props.fetchShowReviews(this.props.match.params.showId);
        }
    }

    render() {
        const { show, openModal, currentUser, reviews } = this.props;

        if (!show) return null;

        return (
            <>
                <div className="backdrop" style={ show.backdrop_path ?
                        { backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + show.backdrop_path})` }
                    : {}}><div className="backdrop-fade">
                    <h2 className="headline-1">{show.name}</h2>
                    <p className="headline-3">{show.overview}</p>
                </div></div>
                
                <div className="center-test">
                    <ul className="season-list">
                        {show.seasons && show.seasons.every(season => season.poster_path) ? show.seasons.map(season => <li key={season.name}><img src={season.poster_path ?
                            "https://image.tmdb.org/t/p/w500" + season.poster_path
                            : ""}/></li> )
                        :
                        null}
                    </ul>
                </div>

                <div className="show-info">
                    <i className="fas fa-calendar-day"></i>
                    <p>{show.first_air_date} to {show.last_air_date} ({show.status})</p>
                    <i className="fas fa-tv"></i>
                    <p>{show.type}</p>
                    <i className="far fa-clock"></i>
                    <p>{show.episode_run_time ? show.episode_run_time[0] : null} min</p>
                    <i className="fas fa-cloud-sun"></i>
                    <p>{show.number_of_seasons} Season{show.number_of_seasons == 1 ? "" : "s"}, {show.number_of_episodes} Episode{show.number_of_episodes == 1 ? "" : "s"}</p>
                </div>

                {currentUser ? reviews.map(review => (
                    <ReviewListItemContainer
                        review={review}
                        key={review.id}
                        deleteReview={this.props.deleteReview}
                        updateReview={this.props.updateReview}
                        openModal={this.props.openModal}
                        show={show}
                    />
                    ))
                    : 
                    <p className="show-review-index">Please sign in to see reviews.</p>}

                {currentUser ? <div className="center-buttons"><a className="green-button" onClick={() => openModal({modal_type: 'review'})} show={show}>log</a></div> : null }

            </>
        );
    }
}
export default ShowsShow;
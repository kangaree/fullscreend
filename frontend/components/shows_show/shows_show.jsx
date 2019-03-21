import React, { Component } from 'react';
import ReviewListItemContainer from './review_list_item_container';
import Loading from '../loading/loading_show';
import { join } from 'path';
import { Link } from 'react-router-dom';

class ShowsShow extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchShow(this.props.match.params.showId);
        this.props.fetchShowSeason(this.props.match.params.showId, 1);
        if (this.props.currentUser) {this.props.fetchShowReviews(this.props.match.params.showId)};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.showId !== this.props.match.params.showId) {
            this.props.fetchShow(this.props.match.params.showId);
            this.props.fetchShowSeason(this.props.match.params.showId, 1);
            if (this.props.currentUser) { this.props.fetchShowReviews(this.props.match.params.showId) };
        }
    }

    render() {

        const { show, openModal, currentUser, reviews, loading, season } = this.props;

        let currentUserReview = {}
        
        if (currentUser) {
            currentUserReview = reviews.reverse().find((review) => review.user_id === currentUser.id);
        }

        let currentUserReviewScore = 0
        
        if (currentUserReview) {
            if (currentUserReview.score) {
                currentUserReviewScore = currentUserReview.score;
            }
        }

        if (loading) {
            return <Loading />;
        }

        if (!show) return null;

        if (show.id === 404) { return <Loading />; }

        return (
            <>
                <div className="show-backdrop" style={ show.backdrop_path ?
                        { backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + show.backdrop_path})` }
                        : {}}>
                        
                    <div className="show-backdrop-fade">
                        
                    </div>
                
                </div>
                
                <img className="dashboard-poster-sticky"
                    src={
                        show.poster_path ?
                            "https://image.tmdb.org/t/p/w500/" + show.poster_path
                            : window.testPoster} /> 
                
                
                <div className="headline-overview">

                    <div className="dashboard-middle-text">
                        <h2 className="headline-show">{show.name}</h2>
                        <div className="headline-show-gray">
                            {show.genres ?
                                show.genres.map(
                                    genre => (<span key={genre.name}>{genre.name} </span>)
                                )
                                : null}
                        </div>
                        <div className="show-info-overview">
                            <i className="fas fa-calendar-day"></i>
                            <p>{show.first_air_date} to {show.last_air_date} ({show.status})</p>
                            <i className="fas fa-tv"></i>
                            <p>{show.type}</p>
                            <i className="far fa-clock"></i>
                            <p>{show.episode_run_time ? show.episode_run_time[0] : null} min</p>
                            <i className="fas fa-cloud-sun"></i>
                            <p>{show.number_of_seasons} Season{show.number_of_seasons == 1 ? "" : "s"}, {show.number_of_episodes} Episode{show.number_of_episodes == 1 ? "" : "s"}</p>
                        </div>
                        <div className="show-overview">{show.overview}</div>
                        <div className="show-networks">
                            {show.networks ?
                                show.networks.map(
                                    network => (<img src={"https://image.tmdb.org/t/p/w300/" + network.logo_path} key={network.name}></img>)
                                )
                                : null}
                        </div>
                    </div>


                    {currentUser ?
                        <div className="dashboard-buttons">
                            <div className="gray-quick-review">
                                <div className="gray-quick-review-link">
                                    <a className="">
                                        <i className="far fa-bookmark" style={currentUserReview ? { color: "#00e24b" } : null}></i>
                                    </a>
                                    <div>Watch</div>
                                </div>
                                <div className="gray-quick-review-link">
                                    <a className="">
                                        <i className="far fa-heart" style={currentUserReview ? (currentUserReview.like ? { color: "orange" } : null) : null}></i>
                                    </a>
                                    <div>Like</div>
                                </div>
                                <div className="gray-quick-review-link">
                                    <a className="">
                                        <i className="far fa-clock" onClick={() => openModal({ modal_type: 'list' })} show={show}></i>
                                    </a>
                                    <div>List</div>
                                </div>
                            </div>
                            <div className="gray-quick-review">
                                <div>
                                    <a className="gray-quick-review-star">
                                        <i className="fas fa-star" style={currentUserReviewScore >= 1 ? { color: "#00e24b" } : null}></i>
                                    </a>
                                    <a className="gray-quick-review-star">
                                        <i className="fas fa-star" style={currentUserReviewScore >= 2 ? { color: "#00e24b" } : null}></i>
                                    </a>
                                    <a className="gray-quick-review-star">
                                        <i className="fas fa-star" style={currentUserReviewScore >= 3 ? { color: "#00e24b" } : null}></i>
                                    </a>
                                    <a className="gray-quick-review-star">
                                        <i className="fas fa-star" style={currentUserReviewScore >= 4 ? { color: "#00e24b" } : null}></i>
                                    </a>
                                    <a className="gray-quick-review-star">
                                        <i className="fas fa-star" style={currentUserReviewScore >= 5 ? { color: "#00e24b" } : null}></i>
                                    </a>
                                    <div className="gray-quick-review-star-caption">Rate</div>
                                </div>
                            </div>
                            <a className="gray-button" onClick={() => openModal({ modal_type: 'review' })} show={show}>Review or log...</a>
                            <a className="gray-button" onClick={() => openModal({ modal_type: 'list' })} show={show}>Add to a list...</a>
                        </div>
                        :
                        <div className="dashboard-buttons">
                            <a className="gray-button" onClick={() => openModal({ modal_type: 'login' })} show={show}>Sign In</a>
                            <a className="gray-button" onClick={() => openModal({ modal_type: 'signup' })} show={show}>Create account to log, rate or review</a>
                        </div>

                    }

                </div>

                <div className="center-horizontally">
                    <div className="left-indent-poster">
                        <ul className="season-list">
                            {show.seasons ? show.seasons.map(season =>
                                <li key={season.name}>
                                    <Link to={"/shows/" + show.id + "/seasons/" + season.season_number}>
                                        <img src={season.poster_path ?
                                            "https://image.tmdb.org/t/p/w500" + season.poster_path
                                            : window.testPoster} />
                                    </Link>
                                </li>)
                                :
                                null}
                        </ul>

                        {season ?
                            <div>
                                <h3>
                                    <i className="fas fa-fast-backward"></i> <i>{season.episodes[0].name}</i> S1 E1 {season.episodes[0].air_date}
                                </h3>
                                <p>
                                    {season.episodes[0].overview}
                                </p>
                            </div>
                            :
                            null}

                        {show.last_episode_to_air ?
                            <div>
                                <h3>
                                    <i className="fas fa-fast-forward"></i> <i>{show.last_episode_to_air.name}</i> S{show.last_episode_to_air.season_number} E{show.last_episode_to_air.episode_number} {show.last_episode_to_air.air_date}
                                </h3>
                                <p>
                                    {show.last_episode_to_air.overview}
                                </p>
                            </div>
                            :
                            null}

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
                            null}
                    </div>
                </div>

                {currentUser ? <div className="center-buttons"><a className="green-button-log" onClick={() => openModal({ modal_type: 'review' })} show={show}>log</a></div> : null}

            </>
        );
    }
}
export default ShowsShow;
import React, { Component } from 'react';
import ReviewListItemContainer from './review_list_item_container'

class ShowsShow extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchShow(this.props.match.params.showId);
        if (this.props.currentUser) {this.props.fetchShowReviews(this.props.match.params.showId)};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.showId !== this.props.match.params.showId) {
            this.props.fetchShow(this.props.match.params.showId);
            if (this.props.currentUser) { this.props.fetchShowReviews(this.props.match.params.showId) };
        }
    }

    render() {
        const { show, openModal, currentUser, reviews } = this.props;

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

        if (!show) return null;

        return (
            <>
                <div className="backdrop" style={ show.backdrop_path ?
                        { backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + show.backdrop_path})` }
                        : {}}>
                        
                    <div className="backdrop-fade">

                        <div className="headline-overview">

                            <img className="dashboard-poster"
                                src={
                                    show.poster_path ?
                                        "https://image.tmdb.org/t/p/w500/" + show.poster_path
                                        : window.testPoster} />
                                            
                            <div className="dashboard-middle-text">
                                <h2 className="headline-show">{show.name}</h2>
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
                            </div>


                            {currentUser ? 
                                <div className="dashboard-buttons">
                                    <div className="gray-quick-review">
                                        <a className="gray-quick-review-link">
                                            <i className="far fa-bookmark" style={currentUserReview ? { color: "#00e24b" } : null}></i>
                                        </a>
                                        <a className="gray-quick-review-link">
                                            <i className="far fa-heart" style={currentUserReview ? (currentUserReview.like ? { color: "orange" } : null) : null}></i>
                                        </a>
                                        <a className="gray-quick-review-link">
                                            <i className="far fa-clock" onClick={() => openModal({ modal_type: 'list' })} show={show}></i>
                                        </a>
                                    </div>
                                    <div className="gray-quick-review">
                                        <a className="gray-quick-review-star">
                                            <i className="fas fa-star" style={currentUserReviewScore >= 1 ? {color: "#00e24b"} : null}></i>
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
                        
                    </div>
                
                </div>
                
                <div className="center-horizontally">
                    <ul className="season-list">
                        {show.seasons && show.seasons.every(season => season.poster_path) ? show.seasons.map(season => <li key={season.name}><img src={season.poster_path ?
                            "https://image.tmdb.org/t/p/w500" + season.poster_path
                            : ""}/></li> )
                        :
                        null}
                    </ul>
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
                    null}

                {currentUser ? <div className="center-buttons"><a className="green-button-log" onClick={() => openModal({ modal_type: 'review' })} show={show}>log</a></div> : null}

            </>
        );
    }
}
export default ShowsShow;
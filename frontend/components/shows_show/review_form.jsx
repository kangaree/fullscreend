import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        // props.review => {id: 144, user_id: 88, show_id: 83095, date_watched: null, season_progress: "", …}

        super(props);

        if (props.review) {
                const string_if_null_date_watched = (props.review.date_watched ? props.review.date_watched : "");
                const string_if_null_season_progress = (props.review.season_progress ? props.review.season_progress : "");
                const string_if_null_score = (props.review.score ? props.review.score : "");
                const string_if_null_like = (props.review.like ? props.review.like : "");           
                const string_if_null_body = (props.review.body ? props.review.body : "");           
                
                // const string_if_null_name = (props.review.name ? props.review.name : "");           
                // const string_if_null_poster_path = (props.review.poster_path ? props.review.poster_path : "");           

            this.state = {
                date_watched: string_if_null_date_watched,
                season_progress: string_if_null_season_progress,
                score: string_if_null_score,
                like: string_if_null_like,
                body: string_if_null_body,
                id: props.review.id,

                // show_title: string_if_null_name,
                // poster_path: string_if_null_poster_path,
            };
        } else {
            this.state = {
                date_watched: "",
                season_progress: "",
                score: "",
                like: "",

                // show_title: props.review.name,
                // poster_path: props.review.poster_path,
            };
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHeartClick = this.handleHeartClick.bind(this);
        this.handleStarsOneClick = this.handleStarsOneClick.bind(this);
        this.handleStarsTwoClick = this.handleStarsTwoClick.bind(this);
        this.handleStarsThreeClick = this.handleStarsThreeClick.bind(this);
        this.handleStarsFourClick = this.handleStarsFourClick.bind(this);
        this.handleStarsFiveClick = this.handleStarsFiveClick.bind(this);
    }

    handleHeartClick(e) {
        e.preventDefault();
        if (this.state.like) {
            this.setState({ like: "" });
        } else {
            this.setState({ like: true });
        }
    }

    handleStarsOneClick(e) {
        e.preventDefault();
        this.setState({ score: 1 });
    }
    handleStarsTwoClick(e) {
        e.preventDefault();
        this.setState({ score: 2 });
    }
    handleStarsThreeClick(e) {
        e.preventDefault();
        this.setState({ score: 3 });
    }
    handleStarsFourClick(e) {
        e.preventDefault();
        this.setState({ score: 4 });
    }
    handleStarsFiveClick(e) {
        e.preventDefault();
        this.setState({ score: 5 });
    }

    handleSubmit(e) {
        e.preventDefault();

        const showId = parseInt(this.props.show.id);

        const poster_path = this.props.show.poster_path ? this.props.show.poster_path : "/8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg";

        const review = Object.assign({}, this.state, {
            show_id: showId,
            user_id: this.props.currentUserId,

            show_title: this.props.show.name,
            poster_path,
        });

        if (this.props.createReview) {
            this.props.createReview(review).then(() => this.props.closeModal());
        } else {
            this.props.updateReview(review).then(() => this.props.closeModal());
        }
    }

    update(property) {
        return e => {
            return this.setState({ [property]: e.currentTarget.value })
        };
    }

    render() {
        return (
            <div className="review-form-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>

                
                <form onSubmit={this.handleSubmit}>
                    <label className="diary-header">I WATCHED...</label>
                    <h1>{this.props.show.name}</h1>
                    <br />
                    
                    <img src={
                        this.props.show.poster_path ?
                            "https://image.tmdb.org/t/p/w500/" + this.props.show.poster_path
                            : ""} className="review-form-poster"/>
                    
                    <input type="date"
                        className="review-date-input"
                        value={this.state.date_watched}
                        onChange={this.update("date_watched")}
                    />

                    <textarea
                        className="review-body-input"
                        cols="30"
                        rows="5"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />

                    <div className="stars-likes-submit">
                        <label>
                            <div className="stars-likes-submit-label">Rating</div>
                            <div className="five-stars">
                                <div className="one-out-of-five" onClick={this.handleStarsOneClick}><i className="fas fa-star" style={this.state.score >= 1 ? { color: "#00e24b" } : { color: "#3f4b58" }}></i></div>
                                <div className="two-out-of-five" onClick={this.handleStarsTwoClick}><i className="fas fa-star" style={this.state.score >= 2 ? { color: "#00e24b" } : { color: "#3f4b58" }}></i></div>
                                <div className="three-out-of-five" onClick={this.handleStarsThreeClick}><i className="fas fa-star" style={this.state.score >= 3 ? { color: "#00e24b" } : { color: "#3f4b58" }}></i></div>
                                <div className="four-out-of-five" onClick={this.handleStarsFourClick}><i className="fas fa-star" style={this.state.score >= 4 ? { color: "#00e24b" } : { color: "#3f4b58" }}></i></div>
                                <div className="five-out-of-five" onClick={this.handleStarsFiveClick}><i className="fas fa-star" style={this.state.score >= 5 ? { color: "#00e24b" } : { color: "#3f4b58" }}></i></div>
                            </div>
                            
                        </label>
                        <label>
                            <div className="stars-likes-submit-label">Like</div>
                            <div onClick={this.handleHeartClick} className="like-button"><i className="fas fa-heart" style={this.state.like ? { color: "orange" } : { color:"#3f4b58"}}></i></div>
                        </label>
                        <input type="submit" className="green-button"/>
                    </div>

                    <label className="review-season-input">
                        Season
                        <input
                            className="review-season-input-input"
                            type="number"
                            min="1"
                            max={ this.props.show.number_of_seasons }
                            value= { this.state.season_progress }
                            onChange={this.update("season_progress")}
                        />
                    </label>

                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);

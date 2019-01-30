import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date_watched: "",
            season_progress: "",
            score: "",
            like: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToShowShow = this.navigateToShowShow.bind(this);
    }

    navigateToShowShow() {

        const url = `/shows/${this.props.show.id}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();

        const showId = parseInt(this.props.show.id);

        const review = Object.assign({}, this.state, {
            // show_id: this.state.ui.shows_show,
            // user_id: this.state.session.currentUserId
            show_id: showId,
            user_id: this.props.currentUserId
        });

        this.props.createReview(review).then(() => this.props.closeModal());
        // this.navigateToShowShow();
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

                    <div className="stars-likes">
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-heart"></i>
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

                    <input type="submit" className="green-button"/>
                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);

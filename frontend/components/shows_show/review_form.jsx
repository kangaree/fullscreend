import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToShowShow = this.navigateToShowShow.bind(this);
    }

    navigateToShowShow() {

        const url = `/shows/${this.props.showId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();

        const showId = parseInt(this.props.showId);

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
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="signup-form-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <form onSubmit={this.handleSubmit}>
                    <label>I watched...</label>
                    <br />
                    
                    <input type="date"
                        className="signup-input"
                        value={this.state.date_watched}
                        onChange={this.update("date_watched")}
                    />
                    <br />

                    <textarea
                        className="signup-input"
                        cols="30"
                        rows="10"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <br />

                    <div className="stars-likes">
                        <div className="five-stars">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <input type="number" id="tentacles" name="tentacles"
                                min="1" max="10" />
                            <br />
                        </div>
                        <br />

                        <div className="heart-like">
                            <i className="far fa-heart"></i>
                            <input type="checkbox"/>
                        </div>
                    </div>


                    <br/>
                    <input type="submit" className="green-button"/>
                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);

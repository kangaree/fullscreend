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
        const url = `/shows/${this.props.match.params.showId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        const showId = parseInt(this.props.match.params.showId);

        const review = Object.assign({}, this.state, {
            show_id: showId,
            user_id: currentUser.id
            // show_id: showId,
            // user_id: currentUser.id
        });
        this.props.createReview(review).then(() => this.props.closeModal());
        this.navigateToShowShow();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="signup-form">
                <div onClick={this.props.closeModal} className="close-x-login">X</div>
                <form onSubmit={this.handleSubmit}>

                    <label>Comment</label>
                    <br />

                    <textarea
                        cols="30"
                        rows="10"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <br />
                    <input type="submit" />
                </form>
                <button onClick={this.navigateToShowShow}>Cancel</button>
            </div>
        );
    }
}

export default withRouter(ReviewForm);

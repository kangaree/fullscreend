import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class ListingForm extends React.Component {
    constructor(props) {

        super(props);
        
        this.state = {
            list_id: "",
            show_id: props.show.id,
            show_title: props.show.name,
            poster_path: (props.show.poster_path ? props.show.poster_path : ""),
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.addToList = this.addToList.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserLists(this.props.currentUserId);
    }

    handleSubmit(e) {
        e.preventDefault();

        const listing = Object.assign({}, this.state, {
            show_id,
            show_title,
            poster_path,
        });

        if (this.props.createListing) {
            this.props.createListing(listing).then(() => this.props.closeModal());
        } else {
            this.props.createListing(listing).then(() => this.props.closeModal());
        }
    }

    // addToList(listId) {

    //     const listing = Object.assign({}, this.state, {
    //         list_id: listId,
    //         show_id: this.props.show.id,
    //         show_title: this.props.show.name,
    //         poster_path: (this.props.show.poster_path ? this.props.show.poster_path : ""),
    //     });

    //     if (this.props.createListing) {
    //         this.props.createListing(listing).then(() => this.props.closeModal());
    //     } else {
    //         this.props.createListing(listing).then(() => this.props.closeModal());
    //     }
    // }

    update(property) {
        return e => {
            return this.setState({ [property]: e.currentTarget.value })
        };
    }

    render() {

        const { lists, listIds } = this.props;

        return (
            <div className="review-form-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                {listIds.map(
                    listId => (<h2 key={listId} onClick={ () =>
                                    {
                                        const listing = Object.assign({}, this.state, {
                                            list_id: listId,
                                        });
                                            this.props.createListing(listing).then(() => this.props.closeModal());
                                    }
                                }>
                                {lists[listId].title}
                                </h2>)
                )}
                {/* <form onSubmit={this.handleSubmit}>
                    <label className="diary-header">Add to list...</labdffel>
                    <h1>{showTitle}</h1>
                    <br />

                    <img src={"https://image.tmdb.org/t/p/w500/" + showPosterPath} className="review-form-poster" />

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

                    <label className="review-season-input">
                        Season
                        <input
                            className="review-season-input-input"
                            type="number"
                            min="1"
                            max={this.props.show ? this.props.show.number_of_seasons : 420}
                            value={this.state.season_progress}
                            onChange={this.update("season_progress")}
                        />
                    </label>

                </form> */}
            </div>
        );
    }
}

export default withRouter(ListingForm);

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
            note: "",
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.addToList = this.addToList.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserLists(this.props.currentUserId);
    }

    update(property) {
        return e => {
            return this.setState({ [property]: e.currentTarget.value })
        };
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {

        const { lists, listIds } = this.props;

        return (
            <div className="listing-form-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>

                {/* <label>Note
                    <input type="text"
                        value={this.state.note}
                        onChange={this.update('note')}
                        className="signup-input"
                    />
                </label> */}

                {listIds.map(
                    listId => (<h2 key={listId} 
                                className="listing-list-link"
                                onClick={ () =>
                                    {
                                        const listing = Object.assign({}, this.state, {
                                            list_id: listId,
                                        });
                                            this.props.createListing(listing).then(() => this.props.closeModal());
                                    }
                                }>
                                {lists[listId].title}
                                </h2>)
                ).reverse()}
            </div>
        );
    }
}

export default withRouter(ListingForm);

import { connect } from 'react-redux';
import { createListing, fetchUserLists } from '../../actions/list_actions';
import ListingForm from './listing_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.currentUserId,
        show: state.entities.shows[state.ui.shows_show],

        listIds: state.ui.currentLists,
        lists: state.entities.lists,
    }
};

const mapDispatchtoProps = dispatch => ({
    createListing: (listing) => dispatch(createListing(listing)),
    closeModal: () => dispatch(closeModal()),
    fetchUserLists: userId => dispatch(fetchUserLists(userId)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ListingForm);
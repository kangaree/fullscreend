import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const List = ({ list, deleteList, openModal, currentUser, user }) => {
    const { title, description } = list;

    return (
        <div className="all-review-index-body-container">

            <div className="all-review-index">

                <div className="">{title}</div>

            </div>

        </div>
    );
};

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }, { list }) => {
    return {
        user: users[list.user_id],
        currentUser: users[currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(List);
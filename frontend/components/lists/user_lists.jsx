import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListListItemContainer from './list_list_item_container'

class UserLists extends Component {
    componentDidMount() {
        if (this.props.currentUserId) { this.props.fetchUserLists(this.props.currentUserId) };
    }

    render() {

        const { currentUserId, lists } = this.props;

        return (
            <>
                <div className="blank-header"></div>
                <div className="all-review-index-background">
                    <h2 className="list-index-new-title">Your Shows.</h2>
                    {currentUserId ? lists.map(list => (
                        <ListListItemContainer
                            list={list}
                            key={list.id}
                            deleteList={this.props.deleteList}
                            updateList={this.props.updateList}
                        />
                    )).reverse()
                        :
                        null}
                </div>


            </>
        );
    }
}
export default UserLists;
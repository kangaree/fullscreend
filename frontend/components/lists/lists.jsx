import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListListItemContainer from './list_list_item_container'

class Lists extends Component {
    componentDidMount() {
        if (this.props.currentUser) { this.props.fetchLists() };
    }

    render() {
        const { currentUser, lists } = this.props;

        return (
            <>
                <div className="blank-header"></div>
                <div className="all-review-index-background">
                    <h2 className="list-index-new-title">Collect, curate, and share. Lists are the perfect way to group shows.</h2>
                    <div className="new-list-link"><Link to="/lists/new" className="new-list-link">Start your own list.</Link></div>
                    {lists.map(list => (
                        <ListListItemContainer
                            list={list}
                            key={list.id}
                            deleteList={this.props.deleteList}
                            updateList={this.props.updateList}
                        />
                    )).reverse()}
                </div>


            </>
        );
    }
}
export default Lists;
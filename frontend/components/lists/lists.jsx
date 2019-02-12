import React, { Component } from 'react';

import ListListItemContainer from './list_list_item_container'

class Lists extends Component {
    componentDidMount() {
        if (this.props.currentUser) { this.props.fetchLists() };
    }

    render() {
        const { currentUser, lists, } = this.props;

        return (
            <>
                <div className="blank-header"></div>
                <div className="all-review-index-background">
                    <h2 className="stream-title">LISTS</h2>
                    {currentUser ? lists.map(list => (
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
export default Lists;
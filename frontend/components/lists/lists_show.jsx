import React, { Component } from 'react';

class ListsShow extends Component {
    componentDidMount() {
        this.props.fetchList(this.props.match.params.listId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.listId !== this.props.match.params.listId) {
            this.props.fetchList(this.props.match.params.listId);
            
        }
    }

    render() {

        const { list } = this.props;

        if (!list) return null;

        return (
            <>
                <div className="blank-header"></div>
                <div className="all-review-index-background">
                    <div className="list-item-container">
                        {list.title}
                    </div>
                </div>


            </>
        );
    }
}
export default ListsShow;
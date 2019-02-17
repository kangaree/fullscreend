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
                        <h3>{list.title}</h3>
                        {list.listings ? (Object.values(list.listings).map(
                            listing => {
                                return (<div key={listing.show_id} className= "list-posters-info">
                                    <p>{listing.show_title}</p>
                                    <p>{listing.note}</p>
                                    <img className="list-poster"
                                        src={"https://image.tmdb.org/t/p/w500/" + listing.poster_path}
                                    />
                                </div>);
                            }
                        )) : null}
                    </div>
                </div>


            </>
        );
    }
}
export default ListsShow;
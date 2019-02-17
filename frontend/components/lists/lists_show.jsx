import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListsShow extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
                    <div className="list-show-item-container">
                        <h3 className="list-show-title">{list.title}</h3>
                        <p className="">{list.description}</p>
                        {list.listings ? (Object.values(list.listings).map(
                            listing => {
                                return (
                                    <Link to={"/shows/" + listing.show_id} key={listing.show_id}>
                                    {/* <p>{listing.show_title}</p> */}
                                    {/* <p>{listing.note}</p> */}
                                    {/* <img className="list-poster"
                                    src={"https://image.tmdb.org/t/p/w500/" + listing.poster_path}
                                    /> */}
                                    <img className="list-show-poster"
                                        src={"https://image.tmdb.org/t/p/w500/" + listing.poster_path}
                                    />
                                    </Link>
                                );
                            }
                        )) : <p>There are no shows in this list.</p>}
                    </div>
                </div>


            </>
        );
    }
}
export default ListsShow;
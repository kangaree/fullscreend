import { connect } from 'react-redux';
import ShowsPopular from './shows_popular';
import { fetchPopularShows } from '../../actions/show_actions';

const mapStateToProps = (state, { match }) => {
    const page = match.params.page ? parseInt(match.params.page) : 1;

    return { 
        showIds: state.ui.popular_shows,
        shows: state.entities.shows,

        // shows: (state.entities.popular_shows).map(showId => state.entities.shows[showId])

        page,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPopularShows: page => dispatch(fetchPopularShows(page))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsPopular);

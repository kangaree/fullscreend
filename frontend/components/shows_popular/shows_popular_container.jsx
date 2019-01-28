import { connect } from 'react-redux';
import ShowsPopular from './shows_popular';
import { fetchPopularShows } from '../../actions/show_actions';

const mapStateToProps = state => {
    return { shows: Object.values(state.entities.popular_shows) };
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

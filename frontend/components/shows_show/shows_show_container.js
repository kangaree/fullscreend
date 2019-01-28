import { connect } from 'react-redux';

import ShowsShow from './shows_show';
import { fetchShow } from '../../actions/show_actions';
// import { selectPokeItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    // debugger
    // const show = state.entities.show[ownProps.match.params.showId];
    const show = Object.values(state.entities.shows_show)[0];
    // debugger
    return {
        show,
        // items: selectPokeItems(state, pokemon),
        // loading: state.ui.loading.detailLoading
    };
};

const mapDispatchToProps = dispatch => ({
    fetchShow: id => dispatch(fetchShow(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsShow);
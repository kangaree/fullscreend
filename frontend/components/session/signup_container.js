import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchtoProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchtoProps)(Signup);
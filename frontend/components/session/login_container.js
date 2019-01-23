import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';

const mapDispatchtoProps = dispatch => ({
    createNewUser: formUser => dispatch(login(formUser)),
});

export default connect(null, mapDispatchtoProps)(Login);
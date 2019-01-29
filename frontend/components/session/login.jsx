import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processLoginForm(this.state)
            .then(() => this.props.closeModal());
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            username: "test_user",
            password: "test_user",
        }
        this.props.processLoginForm(user).then(() => this.props.closeModal());
    }

    renderDemoButton() {
        const button = () => (
            <button
                onClick={this.handleDemoSubmit}
                className="login-submit-demo"
            >Demo User
            </button>
        );
        return button();
    }

    renderErrors() {
        return (
            <div className="session-error">{this.props.errors}</div>    
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <div onClick={this.props.closeModal} className="close-x-login">X</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>Username
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <label>Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input className="login-submit" type="submit" value="SIGN IN" />
                    </div>
                </form>
                    {this.renderDemoButton()}
            </div>
        );
    }
};

export default withRouter(Login);
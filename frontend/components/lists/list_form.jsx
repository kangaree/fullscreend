import React from 'react';
import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUserId,
            title: '',
            description: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.processListForm(this.state);
    }

    // renderErrors() {
    //     return (
    //         <ul className="list-form-error">
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {

        return (
            <div className="">
                <div className="blank-header"></div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h1>Title</h1>
                    <br />
                    {/* {this.renderErrors()} */}
                    <div className="signup-form">
                        <br />
                        <label>Title
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Description
                            <input type="text"
                                value={this.state.description}
                                onChange={this.update('description')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <input className="green-button" type="submit" value="NEW LIST" />
                    </div>
                </form>
            </div>

        );
    }
};

export default withRouter(ListForm);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {addUser, changeUserAlert, pleaseLogin} from '../actions';

class AddUser extends Component {

    componentWillMount() {
        this.props.changeUserAlert(false);
    }
    componentWillUnmount() {
        this.props.pleaseLogin(true);
    }

    renderField(field) {
        const {meta: {touched, error}, label, input} = field;
        const className = `form-control ${touched && error ? 'redInput' : ''}`;
        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    className={className}
                    type="text"
                    {...input}
                />
                <div className="error"> {touched ? error : ''}</div>
            </div>
        )
    }
    onSubmit = values => {
        const {addUser, history} = this.props
        addUser(values, () => {
            history.push('/login');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return(
            <div>
                <div className="animated fadeIn formWidth">
                    <form onSubmit={handleSubmit(this.onSubmit)} className="addUserForm">
                        <Field
                            label="Name"
                            name="name"
                            component={this.renderField}
                        />
                        <Field
                            label="Email Address"
                            name="emailAddress"
                            component={this.renderField}
                        />
                        <Field
                            label="Username"
                            name="username"
                            component={this.renderField}
                        />
                        <Field
                            label="Password"
                            name="password"
                            component={this.renderField}
                        />
                        <div className="centerButtons">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const validate = values => {
    const errors = {}
    const {name, emailAddress, username, password} = values
    if (!name) {
        errors.name = 'Enter a Name';
    }
    if (!emailAddress) {
        errors.emailAddress = 'Enter an Email Address';
    }
    if (!username) {
        errors.username = 'Enter a Username';
    }
    if (!password) {
        errors.password = 'Enter a Password';
    }
    return errors;
};

export default reduxForm({
    validate,
    form: 'SignUpForm'
})(
    connect(null, {addUser, changeUserAlert, pleaseLogin})(AddUser)
);


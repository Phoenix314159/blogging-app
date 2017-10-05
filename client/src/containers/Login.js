import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {login, changeUserAlert} from '../actions';

class Login extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);

    }

    componentWillMount() {
        this.props.changeUserAlert(false);
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        let className = `form-control ${touched && error ? 'redInput' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                <div className="error"> {touched ? error : ''}</div>
            </div>
        )
    }
    renderPass(field) {
        const {meta: {touched, error}} = field;
        let className = `form-control ${touched && error ? 'redInput' : ''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="password"
                    {...field.input}
                />
                <div className="error"> {touched ? error : ''}</div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.login(values, () => {
            this.props.history.push('/')
        });

    }

    renderForm() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <div className="animated fadeIn formWidth">
                    <form onSubmit={handleSubmit(this.onSubmit)} className="formBorder">
                        <Field
                            label="Username"
                            name="username"
                            component={this.renderField}
                        />
                        <Field
                            label="Password"
                            name="password"
                            component={this.renderPass}
                        />
                        <div className="centerButtons">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        const {pleaseLogin, newUser} = this.props.auth;
        if (pleaseLogin && newUser) {
            return (
                <div>
                    <h1 className="animated slideInDown pleaseLoginHeader">Please Login</h1>
                    {this.renderForm()}
                </div>
            )
        }
        return(
            <div>
                {this.renderForm()}
            </div>
        )
    }
}
const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Enter a username';
    }
    if (!values.password) {
        errors.password = 'Enter a password';
    }
    return errors;
}
const mapStateToProps = ({auth}) => {
    return {auth}
}
export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, {login, changeUserAlert})(Login)
);

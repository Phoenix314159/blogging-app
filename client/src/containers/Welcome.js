import React, {Component} from 'react';
import {connect} from 'react-redux';

class Welcome extends Component {

    render() {
        console.log(this.props.auth.removeWelcome)
        const {userAlert, name, removeWelcome} = this.props.auth;
        console.log(userAlert)
        if(!removeWelcome){
            if (userAlert) {
                return (
                    <div className="animated slideInDown noAccountHeader">
                        <h1>You Must Create an Account</h1>
                    </div>
                )
            }
            if (name) {
                return (
                    <div className="animated slideInDown welcomeHeader">
                        <h1>Welcome {name}!</h1>
                    </div>
                )


            }
            return (
                <div>{null}</div>
            )
        }
        return (
            <div>{null}</div>
        )
    }
}
const mapStateToProps = ({auth}) => {
    return {auth}
}
export default connect(mapStateToProps, null)(Welcome);

/**
 * Created by John on 2016/11/26.
 * Toggle组件
 */
import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}; //初始化
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <div className="login">
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h2>Welcome back!</h2>
    } else {
        return <h2>Please sign up.</h2>
    }
}

function LoginButton(props) {
    return (
        <button className="btn btn-login" onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button className="btn btn-login" onClick={props.onClick}>
            Logout
        </button>
    );
}

export default Toggle;
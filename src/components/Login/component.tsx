import React = require("react");
import { Component } from "react";

import * as Action from '../../data/actions/session';
import { connect } from "react-redux";
import storeRedux from "../../store/reduxStore";
import "./style.scss";
import {Button} from "primereact/components/button/Button";

interface IState {
    login: string,
    password: string
}

class LoginComponent extends Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            login: 'username',
            password: 'pass'
        };
    }

    handleSubmit = (e: any) => {
        storeRedux.dispatch(Action.authenticate(this.state.login, this.state.password));
    }

    handleChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className="LoginComponent">
                <div>
                    <div>
                        <label htmlFor="login">Login:</label>
                        <input type="text"
                            name="login"
                            value={this.state.login}
                            autoComplete="username"
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            name="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </div><div>
                        <Button label={'Log In'}
                                icon={'fa-sign-in'}
                            disabled={!this.state.login || !this.state.password}
                            onClick={this.handleSubmit}/>
                    </div>
                </div >
            </form>
        );
    }
}

export const Login = () => {
    return <LoginComponent />
}
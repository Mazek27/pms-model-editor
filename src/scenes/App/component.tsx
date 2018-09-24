import * as React from "react";
import { Dispatch } from "redux";
import * as actions from "./actions"
import { connect } from "react-redux";
import "./style.scss";
import Bootstrap from "../Bootstrap/component";
import AppMenu from "../../scenes/AppMenu/component"
import { Route } from "react-router";

interface IProps {
    session: any
    children: React.Component[]
}

class AppComponent extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <div className="AppComponent">
            <AppMenu />
            <div className="pagecontainer">
                {this.props.children}
            </div>
        </div>
    }
}

const App = ({ session, children }: IProps) => {
    return <AppComponent session={session} >
        {children}
    </AppComponent>
}

function mapStateToProps({ session }: any, ownProps: any) {
    return {
        session: session,
        children: ownProps.children
    }
}

function mapDispatchToProps(dispach: Dispatch<actions.AppAction>) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
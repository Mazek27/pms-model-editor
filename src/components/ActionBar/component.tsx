import React = require("react");
import { Component } from "react";
import { connect } from "react-redux";
import storeRedux from "../../store/reduxStore";
import "./style.scss";

export interface IProps {
    title: string
    children : any
}

class ActionBarComponent extends Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="ActionBar">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="actions">
                    {this.props.children}
                </div>
            </div >
        );
    }
}

export const ActionBar = (props: IProps) => {
    return <ActionBarComponent title={props.title} >
        {props.children}
    </ActionBarComponent>
}

function mapStateToProps(ownProps: any) {
    return {
        title : ownProps.title,
        children: ownProps.children
    }
}

function mapDispachToProps(/*dispach : Dispatch<actions.BootstrapAction>*/) {
    // return {
    //     isAuthenticate : dispach(actions.isAuthenticate())
    // }
}

export default connect(mapStateToProps, mapDispachToProps)(ActionBar);
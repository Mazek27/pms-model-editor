import React = require("react");
import { Component } from "react";
import "./style.scss";

export interface IProps {
    icon: string,
    handleClick: (event: any) => void
}

class ActionBarItemComponent extends Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="ActionBarItem" onClick={this.props.handleClick} >
                <div className={"fa fa-" + this.props.icon}>
                </div>
            </div >
        );
    }
}

export const ActionBarItem = (props: IProps) => {
    return <ActionBarItemComponent {...props} />
}
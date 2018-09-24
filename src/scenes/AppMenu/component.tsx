import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "../../store/storeState";
import Session = StoreState.Session;
import { Dispatch } from "redux";
import * as actions from "../../data/actions/session"
import storeRedux from "../../store/reduxStore";
import "./style.scss"
import { Link } from "react-router-dom";
import {Button} from "primereact/components/button/Button";

interface IProps {
    session: Session
    children: React.Component[]
    handleLogout: () => void
}

const AppMenu = ({ session, children, handleLogout }: IProps) => {
    return (
        <div className="AppMenu" >
            <div className="navigation">
                <ul>
                    <li><div className={"navigation"}><Link to={"/attribute"}>Attributes</Link></div></li>
                    <li><div className={"navigation"}><Link to={"/treatments"}>Treatments</Link></div></li>
                    <li><div className={"navigation"}><Link to={"/klassi"}>Klassification</Link></div></li>
                </ul>
            </div>
            <Button label={`Logout (${session.username})`} icon="fa-sign-out" onClick={handleLogout}/>
            {/*<div className="button logout" onClick={handleLogout}>Logout ({session.username})</div>*/}
        </div>
    );
}

function mapStateToProps(store: any, ownProps: any) {
    return {
        session: store.session,
        children: ownProps.children
    }
}

function mapDispachToProps() {
    return {
        handleLogout: () => storeRedux.dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(AppMenu);
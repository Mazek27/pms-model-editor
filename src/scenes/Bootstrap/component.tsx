import * as React from "react";
import { connect } from "react-redux";
import { Login } from "../../components/Login/component";
import App from "../App/component"
import { StoreState } from "../../store/storeState";
import Session = StoreState.Session;
import AttributesComponent from "../Attributes/component";
import TreatmentsComponent from "../Treatments/component";
import {Redirect, Route} from "react-router";

interface IProps {
    session: Session;
}

const Bootstrap = ({ session }: IProps) => {

    return (
        session.ticket ? (<App>
            {/*<Route exact path={'/'}>*/}
                {/*<Redirect to={'/attribute'}/>*/}
            {/*</Route>*/}
            <Route path={'/attribute'} component={AttributesComponent} />
            <Route path={'/treatments'} component={TreatmentsComponent} />
        </App>) : <Login />
    )
}

function mapStateToProps({ session }: any) {
    return {
        session
    }
}

export default connect(mapStateToProps)(Bootstrap);
import * as ReactDOM from "react-dom";
import * as React from "react";
import { Route, Router } from "react-router";
import { Provider } from "react-redux";
import createHashHistory from "history/createHashHistory";
import storeRedux from "./store/reduxStore";
import Bootstrap from "./scenes/Bootstrap/component";
// import "../node_modules/lato-font/css/lato-font.min.css" 11Mb!!! kill me
// import "../node_modules/ionicons/dist/scss/ionicons.scss"
// import '../node_modules/primereact/resources/primereact.min.css';
// import '../node_modules/primereact/resources/themes/home/theme.scss';
import "./style.scss";


const history = createHashHistory();

ReactDOM.render(
    <Provider store={storeRedux}>
        <Router history={history}>
            <Route path={"/"} component={Bootstrap}/>
        </Router>
    </Provider>,
    document.getElementById("root")
);
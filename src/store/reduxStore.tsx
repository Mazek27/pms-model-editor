import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import {StoreState} from "./storeState";
import rootReducer from "./reducer";

const loggerMiddleware = createLogger();

const storeRedux = createStore<StoreState.AppState>(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware,
        promiseMiddleware()
    )
);

export default storeRedux;
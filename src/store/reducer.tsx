import { combineReducers } from "redux";
import { StoreState } from "./storeState";
import sessionReducer from "../service/reducer/session.reducer";
import selectionReducer from "../service/reducer/selection.reducer";
import attributeReducer from "../data/reducers/attributes.reducer";
import treatmentReducer from "../data/reducers/treatments.reducer";

const rootReducer = combineReducers<StoreState.AppState>({
    session: sessionReducer,
    selection: selectionReducer,
    attribute: attributeReducer,
    treatment: treatmentReducer
});

export default rootReducer;
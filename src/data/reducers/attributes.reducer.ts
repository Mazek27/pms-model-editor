import { StoreState } from "../../store/storeState";
import { AttributeActionType } from "../../data/actions/attributes"
import { stat } from "fs";

const initialState: StoreState.AttributeList = {
    list: [],
    detail: []
}

export default (state = initialState, action: any): StoreState.AttributeList => {

    switch (action.type) {

        case "LOAD_ATTRIBUTES_FULFILLED": {
            return { ...state, list: action.payload };
        }

        case "LOAD_ATTRIBUTE_DETAILS_FULFILLED": {
            return { ...state, detail: action.payload };
        }
        case "ADD_ATTRIBUTE_FULFILLED": {
            return { ...state, list: [...state.list, action.payload] }
        }
        case "ADD_ATTRIBUTE_DETAIL_FULFILLED": {
            return { ...state, detail: [...state.detail, action.payload] }
        }
        case "REMOVE_ATTRIBUTE": {
            const removeIndex = state.list.indexOf(action.payload)
            const newList = [...state.list]
            newList.splice(removeIndex, 1);
            return { ...state, list: newList }
        }
        case "REMOVE_ATTRIBUTE_DETAIL_FULFILLED": {
            const removeIndex = state.detail.findIndex((detail: any) => { return  detail.id == action.payload.id })
            const newList = [...state.detail]
            newList.splice(removeIndex, 1);
            return { ...state, detail: newList }
        }
        case "ATTRIBUTE_EDIT_FULFILLED": {
            const editedIndex = state.list.findIndex(attribute => { return attribute.id == action.payload.id });
            state.list.splice(editedIndex, 1, action.payload);
            return { ...state, list: [...state.list]};
        }
        case "ATTRIBUTE_DETAIL_EDIT_FULFILLED": {
            const editedIndex = state.detail.findIndex(attribute => { return attribute.id == action.payload.id });
            state.detail.splice(editedIndex, 1, action.payload);
            return { ...state, detail: [...state.detail] };
        }
        default:
            return state;
    }
}
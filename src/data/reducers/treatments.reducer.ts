import { StoreState } from "../../store/storeState";
import { TreatmentActionType } from "../actions/treatments";

const initialState: StoreState.TreatmentList = {
    list: [],
    detail: [],
    subDetail: []
};

function fullfilled(state: string): string {
    return state + '_FULFILLED';
}

export default (state = initialState, action: any): StoreState.TreatmentList => {

    switch (action.type) {
        case fullfilled(TreatmentActionType.LOAD_TREATMENTS): {
            return {
                ...state,
                list: action.payload,
                detail: [],
                subDetail: []
            };
        }

        case fullfilled(TreatmentActionType.LOAD_TREATMENTS_DETAILS): {
            return { ...state, detail: action.payload };
        }

        case fullfilled(TreatmentActionType.LOAD_TREATMENTS_SUB_DETAILS): {
            return { ...state, subDetail: action.payload };
        }

        case fullfilled(TreatmentActionType.ADD_TREATMENT): {
            return { ...state, list: [...state.list, action.payload] };
        }

        case fullfilled(TreatmentActionType.ADD_DETAIL_TREATMENT): {
            return { ...state, detail: [...state.detail, action.payload] };
        }

        case fullfilled(TreatmentActionType.ADD_SUBDETAIL_TREATMENT): {
            return { ...state, subDetail: [...state.subDetail, action.payload] };
        }

        case fullfilled(TreatmentActionType.EDIT_TREATMENT): {
            const editedIndex = state.list.findIndex(treatment => { return treatment.id == action.payload.id });
            state.list.splice(editedIndex, 1, action.payload);
            return { ...state, list: [...state.list] };
        }

        case fullfilled(TreatmentActionType.EDIT_TREATMENT_DETAIL): {
            const editedIndex = state.detail.findIndex(detail => { return detail.id == action.payload.id });
            state.detail.splice(editedIndex, 1, action.payload);
            return { ...state, detail: [...state.detail] };
        }

        case fullfilled(TreatmentActionType.EDIT_TREATMENT_SUBDETAIL): {
            const editedIndex = state.subDetail.findIndex(subdetail => { return subdetail.id == action.payload.id });
            state.subDetail.splice(editedIndex, 1, action.payload);
            return { ...state, subDetail: [...state.subDetail] };
        }

        case fullfilled(TreatmentActionType.REMOVE_TREATMENT): {
            const removeIndex = state.list.findIndex((treatment) => { return treatment.id == action.payload.id})
            const newList = [...state.list]
            newList.splice(removeIndex, 1);
            return { ...state, list: newList }
        }

        case fullfilled(TreatmentActionType.REMOVE_TREATMENT_DETAIL): {
            const removeIndex = state.detail.findIndex((detail: any) => { return  detail.id == action.payload.id })
            const newList = [...state.detail]
            newList.splice(removeIndex, 1);
            return { ...state, detail: newList }
        }

        case fullfilled(TreatmentActionType.REMOVE_TREATMENT_SUBDETAIL): {
            const removeIndex = state.subDetail.findIndex((detail: any) => { return  detail.id == action.payload.id })
            const newList = [...state.subDetail]
            newList.splice(removeIndex, 1);
            return { ...state, subDetail: newList }
        }

        default:
            return state;
    }
}
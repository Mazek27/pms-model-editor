import { StoreState } from "../../store/storeState";
import { TreatmentActionType } from "../../data/actions/treatments";
import { AttributeActionType } from "../../data/actions/attributes";

const initialState: StoreState.Selection = {}

export default (state: StoreState.Selection = initialState, action: any): StoreState.Selection => {

    switch (action.type) {
        case AttributeActionType.SELECT_ATTRIBUTE: {
            return { ...state, attribute: action.payload };
        }

        case AttributeActionType.SELECT_ATTRIBUTE_DETAIL: {
            return { ...state, attribute_detail: action.payload };
        }

        case TreatmentActionType.SELECT_TREATMENT: {
            return { ...state, treatment: action.payload };
        }

        case TreatmentActionType.SELECT_DETAIL_TREATMENT: {
            return { ...state, treatment_detail1: action.payload };
        }

        case TreatmentActionType.SELECT_DETAIL2_TREATMENT: {
            return { ...state, treatment_detail2: action.payload };
        }

        default:
            return state;
    }
}
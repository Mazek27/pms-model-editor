import * as treatmentApi from '../../service/api/treatments.api';

export enum TreatmentActionType {
    LOAD_TREATMENTS = 'LOAD_TREATMENTS',
    LOAD_TREATMENTS_DETAILS = 'LOAD_TREATMENTS_DETAILS',
    LOAD_TREATMENTS_SUB_DETAILS = 'LOAD_TREATMENTS_SUB_DETAILS',
    SELECT_TREATMENT = 'SELECT_TREATMENT',
    SELECT_DETAIL_TREATMENT = 'SELECT_DETAIL_TREATMENT',
    SELECT_DETAIL2_TREATMENT = 'SELECT_DETAIL2_TREATMENT',
    ADD_TREATMENT = 'ADD_TREATMENT',
    ADD_DETAIL_TREATMENT = 'ADD_DETAIL_TREATMENT',
    ADD_SUBDETAIL_TREATMENT = 'ADD_SUBDETAIL_TREATMENT',
    EDIT_TREATMENT = 'EDIT_TREATMENT',
    EDIT_TREATMENT_DETAIL = 'EDIT_TREATMENT_DETAIL',
    EDIT_TREATMENT_SUBDETAIL = 'EDIT_TREATMENT_SUBDETAIL',
    REMOVE_TREATMENT = 'REMOVE_TREATMENT',
    REMOVE_TREATMENT_DETAIL = 'REMOVE_TREATMENT_DETAIL',
    REMOVE_TREATMENT_SUBDETAIL = 'REMOVE_TREATMENT_SUBDETAIL',
}

interface Treatments {
    type: string
    payload: Promise<any>
}

export type TreatmentsAction = Treatments;

export function loadTreatments(): Treatments {
    return {
        type: TreatmentActionType.LOAD_TREATMENTS,
        payload: treatmentApi.loadTreatments()
    }
}

export function loadDetailsForTreatments(treatment : any): Treatments {
    return {
        type: TreatmentActionType.LOAD_TREATMENTS_DETAILS,
        payload: treatmentApi.loadDetailsForTreatment(treatment)
    }
}

export function loadSubDetailsForTreatments(treatment: string): Treatments {
    return {
        type: TreatmentActionType.LOAD_TREATMENTS_SUB_DETAILS,
        payload: treatmentApi.loadSubDetailsForDetailTreatment(treatment)
    }
}

export function selectTreatment(item: any): any {
    return {
        type: TreatmentActionType.SELECT_TREATMENT,
        payload: item
    }
}

export function selectDetailTreatment(item: any): any {
    return {
        type: TreatmentActionType.SELECT_DETAIL_TREATMENT,
        payload: item
    }
}

export function selectSubDetailTreatment(item: any): any {
    return {
        type: TreatmentActionType.SELECT_DETAIL2_TREATMENT,
        payload: item
    }
}

export function addTreatment(newTreatment : any) {
    return {
        type: TreatmentActionType.ADD_TREATMENT,
        payload: treatmentApi.addTreatment(newTreatment)
    }
}

export function addTreatmentdDetail(treatment: any, newTreatmentDetail : any) {
    return {
        type: TreatmentActionType.ADD_DETAIL_TREATMENT,
        payload: treatmentApi.addDetailTreatment(treatment, newTreatmentDetail)
    }
}

export function addTreatmentSubDetail(treatment: any, newTreatmentDetail2 : any) {
    return {
        type: TreatmentActionType.ADD_SUBDETAIL_TREATMENT,
        payload: treatmentApi.addTreatmentDetail2(treatment, newTreatmentDetail2)
    }
}

export function treatmentFieldValueChanged(object: any, field: string, newValue: any): Treatments {
    return {
        type: TreatmentActionType.EDIT_TREATMENT,
        payload: treatmentApi.editTreatment({...object, [field]: newValue})
    }
}

export function treatmentDetailFieldValueChanged(object: any, field: string, newValue: any): Treatments {
    return {
        type: TreatmentActionType.EDIT_TREATMENT_DETAIL,
        payload: treatmentApi.editTreatmentDetail({...object, [field]: newValue})
    }
}

export function treatmentDetail2FieldValueChange(object: any, field: string, newValue: any): Treatments {
    return {
        type: TreatmentActionType.EDIT_TREATMENT_SUBDETAIL,
        payload: treatmentApi.editTreatmentDetail2({...object, [field]: newValue})
    }
}

export function removeTreatment(treatmentId: any) {
    return {
        type: TreatmentActionType.REMOVE_TREATMENT,
        payload: treatmentApi.removeTreatment(treatmentId)
    }
}

export function removeTreatmentDetail(detail: any) {
    return {
        type: TreatmentActionType.REMOVE_TREATMENT_DETAIL,
        payload: treatmentApi.removeTreatmentDetail(detail)
    }
}

export function removeTreatmentDetail2(detail: any) {
    return {
        type: TreatmentActionType.REMOVE_TREATMENT_SUBDETAIL,
        payload: treatmentApi.removeTreatmentDetail2(detail)
    }
}

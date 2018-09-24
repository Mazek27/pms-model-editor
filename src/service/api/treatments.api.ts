import {requestDelete, requestGet, requestPost, requestPut} from "./endpointConnection";

export function loadTreatments() {
    return requestGet("treatment");
}

export function loadDetailsForTreatment(treatment: any) {
    return requestGet(`treatment/${treatment.id}/detail`);
}

export function loadSubDetailsForDetailTreatment(treatment: any) {
    return requestGet(`treatment/${treatment.id}/detail2`)
}

export function addTreatment(newTreatment: any) {
    return requestPost(`treatment`, newTreatment);
}

export function addDetailTreatment(treatment: any, newTreatmentDetail : any) {
    return requestPost(`treatment/${treatment.id}/detail`, newTreatmentDetail);
}

export function addTreatmentDetail2(treatment: any, newTreatmentDetail2 : any) {
    return requestPost(`treatment/${treatment.id}/detail2`, newTreatmentDetail2)
}

export function editTreatment(editedTreatment: any): Promise<any> {
    return requestPut(`treatment/${editedTreatment.id}`, editedTreatment);
}

export function editTreatmentDetail(editedDetail: any): Promise<any> {
    return requestPut(`treatment/${editedDetail.treatment}/detail/${editedDetail.id}`, editedDetail)
}

export function editTreatmentDetail2(editedDetail: any): Promise<any> {
    return requestPut(`treatment/${editedDetail.treatment}/detail2/${editedDetail.id}`, editedDetail)
}

export function removeTreatment(treatment: any) {
    return requestDelete(`treatment/${treatment.id}`);
}

export function removeTreatmentDetail(treatmentDetail: any,) {
    return requestDelete(`treatment/${treatmentDetail.treatment}/detail/${treatmentDetail.id}`);
}

export function removeTreatmentDetail2(treatmentDetail: any) {
    return requestDelete(`treatment/${treatmentDetail.treatment}/detail2/${treatmentDetail.id}`);
}

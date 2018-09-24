import {requestGet, requestPost, requestPut, requestDelete} from "./endpointConnection";



export function loadAttributes() {
    return requestGet("attribute");
}

export function loadSpecyficAttributeProperty(propertyName : string){
    return requestGet(`attribute/${propertyName}`)
}

export function loadDetailsForAttribute(attribute: any) {
    return requestGet(`attribute/${attribute.id}/detail`);
}

export function addAttribute(newAttribute: any) {
    return requestPost("attribute", newAttribute);
}

export function addDetailAttribute(attribute: any, newDetail: any) {
    return requestPost(`attribute/${attribute.id}/detail`, newDetail);
}

export function editAttribute(editedAttribute: any) {
    return requestPut(`attribute/${editedAttribute.id}`, editedAttribute);
}

export function editDetailAttribute(editedDetailAttribute: any) {
    return requestPut(`attribute/${editedDetailAttribute.attribute}/detail/${editedDetailAttribute.id}`, editedDetailAttribute);
}

export function removeAttribute(attribute : any){
    return requestDelete(`attribute/${attribute.id}`);
}

export function removeDetailAttribute(removedDetailAttribute : any){
    return requestDelete(`attribute/${removedDetailAttribute.attribute}/detail/${removedDetailAttribute.id}`);
}
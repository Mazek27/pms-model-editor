import * as attributeApi from '../../service/api/attributes.api';

interface Attributes {
    type: AttributeActionType
    payload?: any | Promise<any>
}

export enum AttributeActionType {
    LOAD_ATTRIBUTES = 'LOAD_ATTRIBUTES',
    LOAD_ATTRIBUTE_DETAILS = 'LOAD_ATTRIBUTE_DETAILS',
    SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE',
    SELECT_ATTRIBUTE_DETAIL = 'SELECT_ATTRIBUTE_DETAIL',
    ATTRIBUTE_EDIT = 'ATTRIBUTE_EDIT',
    ATTRIBUTE_DETAIL_EDIT = 'ATTRIBUTE_DETAIL_EDIT',
    ADD_ATTRIBUTE = 'ADD_ATTRIBUTE',
    REMOVE_ATTRIBUTE = 'REMOVE_ATTRIBUTE',
    ADD_ATTRIBUTE_DETAIL = 'ADD_ATTRIBUTE_DETAIL',
    REMOVE_ATTRIBUTE_DETAIL = 'REMOVE_ATTRIBUTE_DETAIL'
}

export type AttributesAction = Attributes;

export function loadAttributes(): Attributes {
    return {
        type: AttributeActionType.LOAD_ATTRIBUTES,
        payload: attributeApi.loadAttributes()
    }
}

export function loadSpecyficAttributeProperty(propertyName : string){
    return attributeApi.loadSpecyficAttributeProperty(propertyName)
}

export function loadDetailsForAttribute(attribute: any): Attributes {
    return {
        type: AttributeActionType.LOAD_ATTRIBUTE_DETAILS,
        payload: attributeApi.loadDetailsForAttribute(attribute)
    }
}

export function selectAttribute(attribute: any): Attributes {
    return {
        type: AttributeActionType.SELECT_ATTRIBUTE,
        payload: attribute
    }
}

export function selectDetailAttribute(detail: any): Attributes {
    return {
        type: AttributeActionType.SELECT_ATTRIBUTE_DETAIL,
        payload: detail
    }
}

export function addAttribute(newAttribute: any): Attributes {
    return {
        type: AttributeActionType.ADD_ATTRIBUTE,
        payload: attributeApi.addAttribute(newAttribute)
    }
}

export function addAttributeDetail(attribute: any, newDetail: any): Attributes {
    return {
        type: AttributeActionType.ADD_ATTRIBUTE_DETAIL,
        payload: attributeApi.addDetailAttribute(attribute, newDetail)
    }
}

export function removeAttribute(attribute: any): Attributes {
    return {
        type: AttributeActionType.REMOVE_ATTRIBUTE,
        payload: attributeApi.removeAttribute(attribute)
    }
}

export function removeAttributeDetail(detail: any): Attributes {
    return { type: AttributeActionType.REMOVE_ATTRIBUTE_DETAIL,
    payload: attributeApi.removeDetailAttribute(detail)}
}

export function attributeValueChange(object: any, field: string, newValue: any): Attributes {
    return {
        type: AttributeActionType.ATTRIBUTE_EDIT,
        payload: attributeApi.editAttribute({ ...object, [field]: newValue })
    }
}

export function attributeDetailValueChange(object: any, field: string, newValue: any): Attributes {
    return {
        type: AttributeActionType.ATTRIBUTE_DETAIL_EDIT,
        payload: attributeApi.editDetailAttribute({ ...object, [field]: newValue })
    }
}
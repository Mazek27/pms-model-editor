export namespace StoreState {

    export interface IdentifiedObject {
        id: any
    }

    export type Session = {
        ticket?: string
        username?: string
    }

    export type AttributeList = {
        list: any[]
        detail: any[]
    }

    export type TreatmentList = {
        list: any[]
        detail: any[]
        subDetail: any[]
    }

    export type Selection = {
        treatment?: any
        treatment_detail1?: any
        treatment_detail2?: any
        attribute?: any
        attribute_detail?: any
    }

    export type AppState = {
        session: Session
        selection: Selection
        attribute: AttributeList
        treatment: TreatmentList
    }

}
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import AppMenu from "../AppMenu/component";
import { ActionBarItem } from "../../components/ActionBarItem/component";
import { ActionBar } from "../../components/ActionBar/component";
import Table, { ITableColumn } from "../../components/Table/component"
import { stringEditor } from "../../components/TableEditor/component"

import * as actions from "../../data/actions/treatments";
import * as actionsAttribute from "../../data/actions/attributes";
import "./style.scss";
import { StoreState } from "../../store/storeState";

export interface IProps {
    addTreatment: () => void
    addTreatmentDetail: (treatment: any) => void
    addTreatmentSubDetail: (detailId: any) => void

    loadTreatments: () => void
    loadTreatmentDetail: (treatment: any) => void
    loadTreatmentSubDetail: (treatment: any) => void

    selectTreatment: (index: number, row: any) => void
    selectDetailTreatment: (index: number, row: any) => void;
    selectSubDetailTreatment: (index: number, row: any) => void;

    onTreatmentFieldValueChange: (object: any, field: string, newValue: any) => void;
    onTreatmentDetailFieldValueChange: (object: any, field: string, newValue: any) => void;
    onTreatmentDetail2FieldValueChange: (object: any, field: string, newValue: any) => void;

    removeTreatment: (treatment: any) => void
    removeTreatmentDetail: (detail: any) => void
    removeTreatmentSubDetail: (detail2: any) => void

    treatments: any[]
    details: any[]
    subDetails: any[]
    selection: StoreState.Selection
}

class TreatmentsComponent extends React.Component<IProps, any> {

    detailTableColumn: ITableColumn[];
    masterTableColumn: ITableColumn[];
    subDetailTableColumn: ITableColumn[];
    optionsAttribute : any;

    constructor(props: IProps) {
        super(props);

        let optionsAttribute = [
            { label: 'vaun', value: 'vaun'},
            { label: 'vspt', value: 'vspt'},
            { label: 'vsph', value: 'vsph'},
            { label: 'vgri', value: 'vgri'},
            { label: 'viro', value: 'viro'},
            { label: 'vlnq', value: 'vlnq'},
            { label: 'vsub', value: 'vsub'},
            { label: 'zaun', value: 'zaun'},
            { label: 'zspt', value: 'zspt'},
            { label: 'zsph', value: 'zsph'},
            { label: 'zgri', value: 'zgri'},
            { label: 'zrio', value: 'zrio'},
        ];

        this.state ={


            masterTableColumn : [
                { key: 'kurz', name: 'Kurz', resizable: true, editor: stringEditor, filter: 'text'},
                { key: 'bezeichnung', name: 'Bezeichnung', resizable: true, filter: 'text'},
                { key: 'farbe', name: 'Farbe', resizable: true, filter: 'color'},
                { key: 'kosten', name: 'Kosten', resizable: true, filter: 'boolean'}
            ],

            detailTableColumn : [
                { key: 'bedingung', name: 'Bedingung', resizable: true,  editor: stringEditor, sortable: true, filter: 'text' }
            ],

            subDetailTableColumn : [
                { key: 'minwert', name: 'Min wert', resizable: true,  editor: stringEditor, sortable: true, filter: 'text'},
                { key: 'maxwert', name: 'Max wert', resizable: true,  editor: stringEditor, sortable: true, filter: 'text'},
                { key: 'attribute', name: 'Attribute', resizable: true, sortable: true, filter: 'select', options: optionsAttribute },
                { key: 'formel', name: 'Formel', resizable: true, editor: stringEditor, sortable: true, filter:'text'},
                { key: 'bedingung', name: 'Bedingung', resizable: true, sortable: true, filter: 'boolean' }
            ],
            masterTableFilterShow : true,
            detailTableFilterShow : false,
            subDetailFilterShow : false

        }


    }

    componentDidMount() {
        this.props.loadTreatments();
    }

    handleFilterDisplay(tableName : string) {
        this.setState({
            [tableName + "FilterShow"]: !this.state[tableName + "FilterShow"]
        });
    }

    render() {
        return <div className="TreatmentsComponent">
            <div className="master">
                <ActionBar title="MaBnahmearten">
                    <ActionBarItem icon="filter" handleClick={(e) => this.handleFilterDisplay('masterTable')} />
                    <ActionBarItem icon="refresh" handleClick={(e) => this.props.loadTreatments()} />
                    <ActionBarItem icon="plus-circle" handleClick={this.props.addTreatment} />
                    <ActionBarItem icon="minus-circle" handleClick={(e) => this.props.removeTreatment(this.props.selection.treatment)} />
                </ActionBar>
                <Table
                    input={this.props.treatments}
                    columns={this.state.masterTableColumn}
                    filterDisplay={this.state.masterTableFilterShow}
                    selected={this.props.selection.treatment}
                    onRowSelect={this.props.selectTreatment}
                    onRowEdited={this.props.onTreatmentFieldValueChange} />
            </div>

            <div className="detail">
                <ActionBar title="MaBnahmebedingung zur Durchfuhrung">
                    <ActionBarItem icon="filter" handleClick={(e) => this.handleFilterDisplay('detailTable')} />
                    <ActionBarItem icon="refresh" handleClick={(e) => this.props.loadTreatmentDetail(this.props.selection.treatment)} />
                    <ActionBarItem icon="plus-circle"   handleClick={(e) => this.props.addTreatmentDetail(this.props.selection.treatment)} />
                    <ActionBarItem icon="minus-circle"  handleClick={(e) => this.props.removeTreatmentDetail(this.props.selection.treatment_detail1)} />
                </ActionBar>
                <Table
                    input={this.props.details}
                    columns={this.state.detailTableColumn}
                    selected={this.props.selection.treatment_detail1}
                    filterDisplay={this.state.detailTableFilterShow}
                    onRowSelect={this.props.selectDetailTreatment}
                    onRowEdited={this.props.onTreatmentDetailFieldValueChange} />
            </div>

            <div className="detail">
                <ActionBar title="MaBnahmefolgen">
                    <ActionBarItem icon="filter" handleClick={(e) => this.handleFilterDisplay('subDetailTable')} />
                    <ActionBarItem icon="refresh" handleClick={(e) => this.props.loadTreatmentSubDetail(this.props.selection.treatment)} />
                    <ActionBarItem icon="plus-circle" handleClick={(e) => this.props.addTreatmentSubDetail(this.props.selection.treatment)} />
                    <ActionBarItem icon="minus-circle" handleClick={(e) => this.props.removeTreatmentSubDetail(this.props.selection.treatment_detail2)} />
                </ActionBar>
                <Table
                    input={this.props.subDetails}
                    columns={this.state.subDetailTableColumn}
                    filterDisplay={this.state.subDetailTableFilterShow}
                    selected={this.props.selection.treatment_detail2}
                    onRowSelect={this.props.selectSubDetailTreatment}
                    onRowEdited={this.props.onTreatmentDetail2FieldValueChange} />
            </div>
        </div>
    }
}

const Treatment = (props: IProps) => {
    return <TreatmentsComponent {...props} />
}

function mapStateToProps({treatment, selection}: StoreState.AppState, ownProps: any) {
    return {
        treatments: treatment.list,
        details: treatment.detail,
        subDetails: treatment.subDetail,
        selection
    }
}

function mapDispachToProps(dispatch: Dispatch<actions.TreatmentsAction>, ownProps: any) {
    return {
        addTreatment: () => dispatch(actions.addTreatment({})),
        addTreatmentDetail: (treatment: any) => dispatch(actions.addTreatmentdDetail(treatment, {})),
        addTreatmentSubDetail: (treatment: any) => dispatch(actions.addTreatmentSubDetail(treatment, {})),

        loadTreatments: () => dispatch(actions.loadTreatments()),
        loadTreatmentDetail: (treatment : any) => dispatch(actions.loadDetailsForTreatments(treatment)),
        loadTreatmentSubDetail: (treatment : any) => dispatch(actions.loadSubDetailsForTreatments(treatment)),


        selectTreatment: (index: number, treatment: any) => {
            dispatch(actions.selectTreatment(treatment));
            dispatch(actions.loadDetailsForTreatments(treatment))
            dispatch(actions.loadSubDetailsForTreatments(treatment))
        },
        selectDetailTreatment: (index: number, treatment: any) => dispatch(actions.selectDetailTreatment(treatment)),
        selectSubDetailTreatment : (index: number, treatment: any)=> dispatch(actions.selectSubDetailTreatment(treatment)),

        onTreatmentFieldValueChange: (object: any, field: string, newValue: any) => dispatch(actions.treatmentFieldValueChanged(object, field, newValue)),
        onTreatmentDetailFieldValueChange: (object: any, field: string, newValue: any) => dispatch(actions.treatmentDetailFieldValueChanged(object, field, newValue)),
        onTreatmentDetail2FieldValueChange: (object: any, field: string, newValue: any) => dispatch(actions.treatmentDetail2FieldValueChange(object, field, newValue)),

        removeTreatment: (treatment: any) => dispatch(actions.removeTreatment(treatment)),
        removeTreatmentDetail: (detail: any) => dispatch(actions.removeTreatmentDetail(detail)),
        removeTreatmentSubDetail: (detail2: any) => dispatch(actions.removeTreatmentDetail2(detail2)),
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Treatment);
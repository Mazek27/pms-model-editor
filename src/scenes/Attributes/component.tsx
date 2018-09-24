import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { ActionBarItem } from "../../components/ActionBarItem/component";
import { ActionBar } from "../../components/ActionBar/component";
import Table, { ITableColumn } from "../../components/Table/component"
import { stringEditor } from "../../components/TableEditor/component"

import * as actions from "../../data/actions/attributes"
import "./style.scss";
import { ColumnProps } from "primereact/components/column/Column";
import { StoreState } from "../../store/storeState";

export interface IProps {
    selectDetail: (index: number, row: any) => void
    selectAttribute: (index: number, row: any) => void

    loadAttributes: () => void
    loadDetailsForAttribute: (attribute: any) => void

    onEditAttributeField: (object: any, field: string, newValue: any) => void;
    onEditAttributeDetailField: (object: any, field: string, newValue: any) => void;

    addAttribute: () => void;
    removeAttribute: (attribute: any) => void;

    addAttributeDetail: (attributeId: string) => void;
    removeAttributeDetail: (detail: any) => void;

    attributes: any[]
    detail: any[]

    selection: StoreState.Selection
}

class AttributesComponent extends React.Component<IProps, any> {

    masterTableColumns: ITableColumn[];
    detailTableColumns: ITableColumn[];

    constructor(props: IProps) {
        super(props);

        let optionsDatentyp = [
            {label: 'Real', value: 'real'},
            {label: 'Integer', value: 'int'},
            {label: 'Char', value: 'char'},
            {label: 'String', value: 'string'},
        ];
        let optionsKlassifizierung = [
            {label: 'Real', value: 'real'},
        ];

        this.state = {


            masterTableColumns : [
                {key: 'name', name: 'Name', resizable: true, editor: stringEditor, sortable: true, filter: 'text'},
                {key: 'min', name: 'Min wert', resizable: true, editor: stringEditor, sortable: true, filter: 'number'},
                {key: 'max', name: 'Max wert', resizable: true, editor: stringEditor, sortable: true, filter: 'number'},
                {key: 'shift', name: 'Curveshift', resizable: true, filter: 'boolean'},
                {key: 'abeleit', name: 'Abgeleitet', resizable: true, filter: 'boolean'},
                {key: 'log', name: 'Log', resizable: true, filter: 'boolean'},
                {key: 'datentyp', name: 'Datentyp', resizable: true, filter: 'select', options: optionsDatentyp},
                {key: 'klassifizierun',name: 'Klassifizierung',resizable: true,filter: 'select',options: optionsKlassifizierung}
            ],

            detailTableColumns : [
                {key: 'formel', name: 'Formel', resizable: true, editor: stringEditor},
                {key: 'bedingung', name: 'Bedingung', resizable: true, editor: stringEditor}
            ],

            masterTableFilterShow : false,
            detailTableFilterShow:false,
        }}

    componentDidMount() {
        this.props.loadAttributes();
    }

    handleFilterDisplay(tableName : string) {
        this.setState({
            [tableName + "FilterShow"]: !this.state[tableName + "FilterShow"]
        });
    }

    render() {
        return <div className="AttributesComponent">
            <div className="master">
                <ActionBar title="Attribute der PMS-Abschnitte">
                    <ActionBarItem icon="filter" handleClick={(e) => this.handleFilterDisplay('masterTable')} />
                    <ActionBarItem icon="refresh" handleClick={this.props.loadAttributes} />
                    <ActionBarItem icon="plus-circle" handleClick={this.props.addAttribute} />
                    <ActionBarItem icon="minus-circle" handleClick={(e) => this.props.removeAttribute(this.props.selection.attribute)} />
                </ActionBar>
                <Table
                    input={this.props.attributes}
                    columns={this.state.masterTableColumns}
                    selected={this.props.selection.attribute}
                    filterDisplay={this.state.masterTableFilterShow}
                    onRowSelect={this.props.selectAttribute}
                    onRowEdited={this.props.onEditAttributeField} />
            </div>

            <div className="detail">
                <ActionBar title="Alterungsfolgen">
                    <ActionBarItem icon="filter" handleClick={(e) => this.handleFilterDisplay('detailTable')} />
                    <ActionBarItem icon="refresh" handleClick={(e) => this.props.loadDetailsForAttribute(this.props.selection.attribute)} />
                    <ActionBarItem icon="plus-circle" handleClick={(e) => this.props.addAttributeDetail(this.props.selection.attribute)} />
                    <ActionBarItem icon="minus-circle" handleClick={(e) => this.props.removeAttributeDetail(this.props.selection.attribute_detail)} />
                </ActionBar>
                <Table
                    input={this.props.detail}
                    columns={this.state.detailTableColumns}
                    selected={this.props.selection.attribute_detail}
                    filterDisplay={this.state.detailTableFilterShow}
                    onRowSelect={this.props.selectDetail}
                    onRowEdited={this.props.onEditAttributeDetailField} />
            </div>
        </div>
    }
}

const Attribute = (props: IProps) => {
    return <AttributesComponent {...props} />
};

function mapStateToProps({ selection, attribute }: StoreState.AppState, ownProps: any) {
    return {
        attributes: attribute.list,
        detail: attribute.detail,
        selection,
    }
}

function mapDispachToProps(dispatch: Dispatch<actions.AttributesAction>, ownProps: any) {
    return {
        loadAttributes: () => dispatch(actions.loadAttributes()),
        loadDetailsForAttribute: (attribute: any) => dispatch(actions.loadDetailsForAttribute(attribute)),

        selectAttribute: (index: number, attribute: any) => {
            dispatch(actions.selectAttribute(attribute));
            dispatch(actions.loadDetailsForAttribute(attribute))
        },
        selectDetail: (index: number, detail: any) => dispatch(actions.selectDetailAttribute(detail)),

        onEditAttributeField: (object: any, field: string, newValue: any) => dispatch(actions.attributeValueChange(object, field, newValue)),
        onEditAttributeDetailField: (object: any, field: string, newValue: any) => dispatch(actions.attributeDetailValueChange(object, field, newValue)),

        addAttribute: () => dispatch(actions.addAttribute({})),
        addAttributeDetail: (attributeId: string) => dispatch(actions.addAttributeDetail(attributeId, {})),

        removeAttribute: (attribute: any) => dispatch(actions.removeAttribute(attribute)),
        removeAttributeDetail: (detail: any) => dispatch(actions.removeAttributeDetail(detail))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Attribute);
import React = require("react");
import {Component} from "react";
import { connect } from "react-redux";
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { StoreState } from "../../store/storeState";
import { InputText } from 'primereact/components/inputtext/InputText'
import { Checkbox } from "primereact/components/checkbox/Checkbox";
import {Dropdown} from "primereact/components/dropdown/Dropdown";
import "./style.scss";
import {ColorPicker} from "primereact/components/colorpicker/ColorPicker";
import {Calendar} from "primereact/components/calendar/Calendar";
import ReactDOM = require("react-dom");


export interface ITableColumn {
    key: string
    name: string
    editor?: any
    resizable?: boolean
    sortable?: boolean
    body?: any
    filter?: any
    options? :any
}

export interface ITableProps {
    columns: ITableColumn[]
    selected: string
    input: any[],
    onRowSelect?: (rowIndex: number, row: any) => void,
    onRowEdited?: (object: any, field: string, newValue: any) => void;
    filterDisplay : boolean
}

class TableComponent extends Component<ITableProps, {}> {

    render() {
        const columns = this.props.columns.map(column => {
            let editor: any;
            if (column.editor && column.filter != 'boolean') {
                editor = column.editor(column.key, this.props.onRowEdited)
            }
            return <Column
                key={column.key}
                field={column.key}
                header={column.name}
                filter={(column.filter == 'text' || column.filter == 'number') && this.props.filterDisplay}
                editor={editor}
                sortable={column.sortable}
                body={(e: any) => {
                    switch (column.filter){
                        case 'boolean' :
                            return <Checkbox checked={e[column.key]} style={{align: 'center'}} onChange={(event) => {
                                return this.props.onRowEdited(e, column.key, event.checked)
                            }}/>
                        case 'select' :
                            return <Dropdown appendTo={document.body} showClear={e[column.key]} value={e[column.key]} options={column.options} style={{width:"100%"}} onChange={(event) => {
                                this.props.onRowEdited(e, column.key, event.value)
                            }}/>
                        case 'color' :
                            return <ColorPicker appendTo={document.body}  value={e[column.key]} onChange={(event) => {
                                this.props.onRowEdited(e, column.key, event.value)
                            }}/>
                        default :
                            return e[column.key] ? e[column.key] : ''
                    }
                }}
                filterType={column.filter}
            />

        });

        return <div className="TableComponent">
            <div>
                <DataTable
                    alwaysShowPaginator={true}
                    responsive={true}
                    scrollable={true}
                    scrollHeight="100%"
                    value={this.props.input}
                    selectionMode={"single"}
                    selection={this.props.selected}
                    onSelectionChange={(e) => this.props.onRowSelect(-1, e.data)}>
                    {columns}
                </DataTable>
            </div>
        </div>
    }
}

const Table = (props: ITableProps) => {
    return <TableComponent {...props} />
}

function mapStateToProps({ attribute }: StoreState.AppState, ownProps: ITableProps) {
    return {
        input: ownProps.input,
        selected: ownProps.selected,
        filterDisplay: ownProps.filterDisplay
    }
}

function mapDispachToProps() {
    return {

    }
}

export default connect(mapStateToProps, mapDispachToProps)(Table);
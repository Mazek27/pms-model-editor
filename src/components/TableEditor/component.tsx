import React = require("react");
import { InputText } from 'primereact/components/inputtext/InputText';

export function stringEditor(fieldName: string,onValueChange: (row: any, field: string, newValue: any) => void, onValueSave: (row: any, field: string, newValue: any) => void) {
    return (props:any) => <StringEditorClass editorProps={...props} fieldName={fieldName} onValueChange={onValueChange} onValueSave={onValueSave}/>
}

class StringEditorClass extends React.Component<any, any> {
    constructor(props: any){
        super(props);

        this.state = {
            value : this.props.editorProps.rowData[this.props.editorProps.field]
        }
    }

    editInputValue(nextValue : any){
        this.setState({
            value : nextValue
        })
    }

    render() {
        let editorProps = this.props.editorProps;
            return <InputText
                type={editorProps.filterType}
                value={this.state.value}
                onKeyDown={(e) => {
                    e.keyCode == 13 || 9 ?
                        this.props.onValueChange(editorProps.value[editorProps.rowIndex], this.props.fieldName, this.state.value) : () => {}
                }}
                onChange={(e) => {
                   this.editInputValue((e.nativeEvent.target as any).value)
                }}
                onBlur={(e) => {
                    this.props.onValueChange(editorProps.value[editorProps.rowIndex], this.props.fieldName, this.state.value)
                }}
            />;
        }
}

// export function checkboxEditor(fieldName: string, onValueChange: (row: any, field: string, newValue: any) => void) {
//     return (props: any) => {
//         let options = [
//             {label: "true", value: true},
//             {label: "false", value: false}
//             ]
//
//         return <Dropdown
//             appendTo={document.body}
//             value={props.value[props.rowIndex][fieldName]}
//             options={options}
//             onChange={(e) => {
//                 onValueChange(props.value[props.rowIndex], fieldName, e.value)
//             }}
//             style={{width: '100%'}}/>;
//     }
// }
//
// export function datentypEditor(fieldName: string, onValueChange: (row: any, field: string, newValue: any) => void) {
//     return (props: any) => {
//         let options = [
//             {label:'Real', value:'real'},
//             {label:'Integer', value:'int'},
//             {label:'Char', value:'char'},
//             {label:'String', value:'string'},
//         ]
//
//         // let options = ["real", "int", "char", "string"].map(o => { return {label: o, value: o}});
//
//         return <Dropdown
//             appendTo={document.body}
//             value={props.value[props.rowIndex][fieldName]}
//             options={options}
//             onChange={(e) => {
//                 onValueChange(props.value[props.rowIndex], fieldName, e.value)
//             }}
//             style={{width: '100%'}}/>;
//     }
// }
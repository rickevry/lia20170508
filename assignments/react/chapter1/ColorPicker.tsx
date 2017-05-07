import * as React from 'react';

function mergeCss(arg0:any,arg1:any,arg2?:any,arg3?:any,arg4?:any) {
    var result = {};
    for (var i=0; i<arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
            Object.keys(arg).forEach(function (parentKey) {
                result[parentKey] = arg[parentKey];
            });
        }
    }
    return result;
}

class ColorPickerProps {
    public colors:any;
    public selectedColor:any;
    public callback:any;
}

export default class ColorPicker extends React.Component<ColorPickerProps, any> {

    constructor(props:ColorPickerProps) {
        super(props);
        this.state = {
            currentColor: {
                rowIndex : -1,
                columnIndex : -1
            },
            selectedColor: this.props.selectedColor
        };
    }

    width: number = 15;
    borderWidth: number = 1;

    getColumnOuterStyle() {
        return {
            borderWidth: 0,
            marginLeft: 0,
            marginBottom: 0,
            marginRight: 4,
            //float:'left',
            width: this.width,
            borderStyle:'none',
            display:'inline-block'
        };
    }


    getColumnInnerStyle() {
        return {
            borderWidth: this.borderWidth,
            marginTop: 5,
            marginLeft: 0,
            marginRight: 0,
            borderColor: '#B6B6B6',
            //float:'left',
            width: this.width,
            borderStyle:'solid'
        };
    }

    handleColorMouseOver(e: any,group:number,rowIndex:number, columnIndex:number) {

        var currentColor = {
            rowIndex : rowIndex,
            columnIndex : columnIndex,
            group : group
        };

        this.setState((origState) => {
            let newState = React.addons.update(origState, { currentColor: { $set: currentColor } });
            return newState;
        });

    }

    handleColorMouseOut(e: any) {
        var currentColor = {
            rowIndex : -1,
            columnIndex : -1,
            group: -1
        };

        this.setState((origState) => {
            let newState = React.addons.update(origState, { currentColor: { $set: currentColor } });
            return newState;
        });
    }

    renderColorDiv(row:any, group: number, rowIndex:number, columnIndex:number) {
        var hoover = ((this.state.currentColor.group == group) && (this.state.currentColor.rowIndex == rowIndex) && (this.state.currentColor.columnIndex == columnIndex));
        hoover = hoover || this.state.selectedColor == row;

        return (
            <div
                key={rowIndex+"_"+columnIndex}
                style={this.getColorDivStyle(row, hoover)}
                onMouseOver={ (e) => this.handleColorMouseOver(e,group, rowIndex, columnIndex ) }
                onMouseOut={ (e) => this.handleColorMouseOut(e) }
                onClick={ (e) => this.handleClick(row) }
            >
            </div>
        );
    }

    getColorDivStyle(color:any, hoover: boolean) {
        var css = {
            position:'relative',
            width:this.width,
            height: 15,
            marginTop: 0,
            marginBottom: 0,
            //float:'left',
            zIndex: 99,
            backgroundColor: color
        };
        var hooverCss = {
            borderColor: '#ffffff',
            height: 13,
            zIndex: 100,
            width: this.width-1,
            borderStyle:'solid',
            borderWidth: 1,
            boxShadow: '0px 0px 1px 1px #444444'
        };
        return mergeCss(css, hoover && hooverCss);
    }

    renderColumn(group:number, colorColumn:any,columnIndex:number) : any {
        return (
            <div key={"renderColumn1_"+columnIndex} style={this.getColumnOuterStyle()}>
                <div key={"renderColumn2_"+columnIndex} style={this.getColumnInnerStyle()}>
                    {this.renderColorDiv(colorColumn.mainColor, group, -1, columnIndex)}
                </div>
                { colorColumn.colors &&
                <div key={"renderColumn3_"+columnIndex} style={this.getColumnInnerStyle()}>
                    {colorColumn.colors.map( (color, rowIndex) => { return this.renderColorDiv(color, group, rowIndex, columnIndex) })}
                </div> }
            </div>
        );
    }

    handleClick(color) {
        this.setState({
            selectedColor: color
        });
        var result = {
            color: color
        };
        this.props.callback && this.props.callback(result);
    }

    render() {
        var self = this;
        return (
            <div>
                <div>
                    <div>
                    {this.props.colors.columns.map( (colorColumn,index) => { return this.renderColumn(1, colorColumn,index) })}
                    </div>
                </div>
                {/*<div style={{marginTop:10}}>
                    <div>
                    Standard Colors
                    </div>
                    <div style={{disdplay:'inline-block'}}>
                    {this.props.colors.standardColors.map( (colorColumn,index) => { return this.renderColumn(2, colorColumn,index) })}
                    </div>
                </div>*/}
            </div>

        );
    }
}

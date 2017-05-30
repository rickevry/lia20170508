import * as React from 'react';

function mergeCss(arg0: any, arg1: any, arg2?: any, arg3?: any, arg4?: any) {
    var result = {};
    for (var i = 0; i < arguments.length; i++) {
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
    public colors: any;
    public selectedColor: any;
    public callback: any;
    public pickerId: any;

}

export default class ColorPicker extends React.Component<ColorPickerProps, any> {

    constructor(props: ColorPickerProps) {
        super(props);
        this.state = {
            currentColor: {
                rowIndex: -1,
                columnIndex: -1
            },
            selectedColor: this.props.selectedColor,
            pickerId: this.props.pickerId
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
            borderStyle: 'none',
            display: 'inline-block'
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
            borderStyle: 'solid'
        };
    }

    handleColorMouseOver(e: any, group: number, rowIndex: number, columnIndex: number) {

        var currentColor = {
            rowIndex: rowIndex,
            columnIndex: columnIndex,
            group: group
        };

        let newState = { ... this.state };
        newState.currentColor = currentColor;
        this.setState(newState);
    }

    handleColorMouseOut(e: any) {
        var currentColor = {
            rowIndex: -1,
            columnIndex: -1,
            group: -1
        };

        let newState = { ... this.state };
        newState.currentColor = currentColor;
        this.setState(newState);

    }

    renderColorDiv(row: any, group: number, rowIndex: number, columnIndex: number) {
        var hoover = ((this.state.currentColor.group == group) && (this.state.currentColor.rowIndex == rowIndex) && (this.state.currentColor.columnIndex == columnIndex));
        hoover = hoover || this.state.selectedColor == row;

        return (
            <div
                key={rowIndex + "_" + columnIndex}
                style={this.getColorDivStyle(row, hoover)}
                onMouseOver={(e) => this.handleColorMouseOver(e, group, rowIndex, columnIndex)}
                onMouseOut={(e) => this.handleColorMouseOut(e)}
                onClick={(e) => this.handleClick(row)}
            >
            </div>
        );
    }
    getShadowStyle() {
        return {
            display: 'none',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            width: '100%',
            height: '100%',
        };
    }

    getColorDivStyle(color: any, hoover: boolean) {
        var css = {
            position: 'relative',
            width: this.width,
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
            width: this.width - 1,
            borderStyle: 'solid',
            borderWidth: 1,
            boxShadow: '0px 0px 1px 1px #444444'
        };
        return mergeCss(css, hoover && hooverCss);
    }

    getColorPickerExpandStyle() : React.CSSProperties {
        return {
            position: 'relative',
            display: 'inline-block',
            textAlign: 'center',
            width: 40,
            height: 20,
            padding: 5,
            border: '1px solid #ccc',
            backgroundColor: '#EEEEEE',
            cursor: 'pointer'
        };
    }

    renderColumn(group: number, colorColumn: any, columnIndex: number): any {
        return (
            <div key={"renderColumn1_" + columnIndex} style={this.getColumnOuterStyle()}>
                <div key={"renderColumn2_" + columnIndex} style={this.getColumnInnerStyle()}>
                    {this.renderColorDiv(colorColumn.mainColor, group, -1, columnIndex)}
                </div>
                {colorColumn.colors &&
                    <div key={"renderColumn3_" + columnIndex} style={this.getColumnInnerStyle()}>
                        {colorColumn.colors.map((color, rowIndex) => { return this.renderColorDiv(color, group, rowIndex, columnIndex) })}
                    </div>}
            </div>
        );
    }


    handleClick(color) {
        this.setState({
            selectedColor: color
        });

        var result = {
            color: color
        }

        this.closeAfterPickedColor();
        this.props.callback && this.props.callback(result);
    }
    closeAfterPickedColor() {
        let element = document.getElementById("colorPickerDiv" + this.props.pickerId);
        let shadow = document.getElementById("shadow" + this.props.pickerId);

        shadow.style.display = shadow.style.display === 'none' ? '' : 'none';
        element.style.display = element.style.display === 'none' ? '' : 'none';
    }

    toggleColorPicker(event) {
        var key = event.target.getAttribute("data-idKey");
        let element = document.getElementById("colorPickerDiv" + key);
        let shadow = document.getElementById("shadow" + key);

        if (shadow.style.position !== 'fixed') {
            shadow.style.position = 'fixed';
        }


        //If shadow doesn't show, display it
        shadow.style.display = shadow.style.display === 'none' ? '' : 'none';
        element.style.display = element.style.display === 'none' ? '' : 'none';
    }
    getPickedColorDisplayStyle() {
        return {
            width: '80%',
            height: 5,
            margin: '0px auto',
            border: '1px solid #ffffff',
            backgroundColor: this.state.selectedColor
        }
    };
    getDropdownContentStyle() : React.CSSProperties {
        return {
            display: 'none',
            fontFamily: '"Tahoma", Verdana, Geneva, Tahoma, sans-serif',
            position: 'relative',
            backgroundColor: '#f9f9f9',
            // minWidth: 200,
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            padding: '12px 16px',
            zIndex: 9999,
            clear: 'right',
            float: 'right'
        };
    }

    render() {
        var self = this;
        return (
            <div style={{ right: 12, position: 'absolute', display: 'inline-block', minWidth: '25%' }} id={"colorPickerComponent" + this.props.pickerId}>
                <div>
                    <div data-idKey={this.props.pickerId} style={this.getShadowStyle()} id={"shadow" + this.props.pickerId} onClick={this.toggleColorPicker}></div>
                    {
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <label style={{ paddingLeft: 40 }}>Color</label>
                            <div style={this.getColorPickerExpandStyle()} data-idKey={this.props.pickerId} id={"colorPickerExpand" + this.props.pickerId} className="dropdown colorPickerExpand" onClick={this.toggleColorPicker}>
                                <img data-idKey={this.props.pickerId} className="bucket" style={{ width: 16 }} src="lebucket.png" alt="Click to expand colorpicker" />
                                <div data-idKey={this.props.pickerId} style={this.getPickedColorDisplayStyle()} className="pickedColorDisplay" id={"pickedColorDisplay" + this.props.pickerId}></div>
                            </div>
                            <input id={"selectedColor" + this.props.pickerId} type="hidden" value={this.state.selectedColor} />
                        </div>
                    }
                    {
                        <div style={this.getDropdownContentStyle()} id={"colorPickerDiv" + this.props.pickerId} className="dropdown-content">
                            <span>Theme Colors</span>
                            <div>
                                {this.props.colors.columns.map((colorColumn, index) => { return this.renderColumn(1, colorColumn, index) })}
                            </div>
                            <div style={{ marginTop: 10 }}>
                                <div>
                                    <div></div>
                                    <span>Standard Colors</span>
                                </div>
                                <div style={{ display: 'inline-block' }}>
                                    {this.props.colors.standardColors.map((colorColumn, index) => { return this.renderColumn(2, colorColumn, index) })}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        );
    }
}

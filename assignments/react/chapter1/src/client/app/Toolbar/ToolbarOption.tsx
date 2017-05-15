import * as React from 'react';
import ColorPicker from '../ColorPicker';

class ToolbarOptionProps {
    public type: optionTypes;
    public id: number;

    public fill: string;
    public fillColor: string;

    public line: string;
    public lineColor: string;

    public posH: number;
    public posV: number;

    public sizeHeight: number;
    public sizeWidth: number;
    public rotation: number;
}

enum optionTypes {
    Fill,
    Line,
    Position,
    Size
}


export default class ToolbarOption extends React.Component<any, any>{
    constructor(props: ToolbarOptionProps) {
        super(props);
        switch (this.props.type) {
            case optionTypes.Fill:
                this.state = {
                    type: this.props.type,
                    id: this.props.id,
                    fill: this.props.fill,
                    fillColor: this.props.fillColor
                }
            
            case optionTypes.Line:
                this.state = {
                    type: this.props.type,
                    id: this.props.id,
                    line: this.props.line,
                    lineColor: this.props.lineColor
                }
            
            
            case optionTypes.Position:
                this.state = {
                    type: this.props.type,
                    id: this.props.id,
                    posH: this.props.posH,
                    posV: this.props.posV
                }
                
            case optionTypes.Size:
                this.state = {
                    type: this.props.type,
                    id: this.props.id,
                    sizeWidth: this.props.sizeWidth,
                    sizeHeight: this.props.sizeHeight,
                    rotation: this.props.rotation
                }
                
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        this.setState({
            [name]: value
        });
    }

    render() {
        let colors: any = {
            standardColors: [
                { mainColor: "#FFFFFF" },
                { mainColor: "#000000" },
                { mainColor: "#E1E0E0" },
                { mainColor: "#354257" },
                { mainColor: "#4A88CB" },
                { mainColor: "#E76826" },
                { mainColor: "#949494" },
                { mainColor: "#FDB409" },
                { mainColor: "#355CB7" },
                { mainColor: "#5FA137" }
            ],
            columns: [
                {
                    mainColor: "#FFFFFF",
                    colors: ["#EFEFEF", "#CFCFCF", "#B1B1B1", "#949494", "#6C6C6C"]
                },
                {
                    mainColor: "#000000",
                    colors: ["#6C6C6C", "#474747", "#303030", "#1C1C1C", "#0B0B0B"]
                },
                {
                    mainColor: "#E1E0E0",
                    colors: ["#C5C3C3", "#9E9B9B", "#625D5D", "#2C2A2A", "#121111"]
                },
                {
                    mainColor: "#354257",
                    colors: ["#CCD3DE", "#9DAABE", "#7284A0", "#26303E", "#1A1F28"]
                },
                {
                    mainColor: "#4A88CB",
                    colors: ["#D7E6F3", "#B0CDEA", "#8CB6DE", "#2560A6", "#183C65"]
                },
                {
                    mainColor: "#E76826",
                    colors: ["#F9DFCC", "#F3C09C", "#F0A271", "#B74510", "#6F2C0C"]
                },
                {
                    mainColor: "#949494",
                    colors: ["#E8E9E8", "#D3D3D3", "#BDBDBD", "#686868", "#414141"]
                },
                {
                    mainColor: "#FDB409",
                    colors: ["#FFEFC1", "#FDE187", "#FED253", "#B17F05", "#6B4E02"]
                },
                {
                    mainColor: "#355CB7",
                    colors: ["#D0DAEF", "#A6B9E1", "#7C98D2", "#243F84", "#182851"]
                },
                {
                    mainColor: "#5FA137",
                    colors: ["#DCECD0", "#BADBA4", "#99C87B", "#436F28", "#2A461B"]
                }
            ]
        };
        switch (this.props.type) {
            case optionTypes.Fill:
                return (
                    <div id={"toolbarOption" + this.props.id} style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <input id={"noFill" + this.props.id} type="radio" name="fill" value="noFill" onChange={this.handleInputChange} checked={this.state.fill === 'noFill'} /><label htmlFor={"noFill" + this.props.id}>No fill</label><br /><br />
                            <input id={"solidFill" + this.props.id} type="radio" name="fill" value="solidFill" onChange={this.handleInputChange} checked={this.state.fill === 'solidFill'} /><label htmlFor={"solidFill" + this.props.id}>Solid fill</label><br />
                        </form>
                        <br />
                        <ColorPicker colors={colors} selectedColor={'#ffffff'} pickerId={this.state.id} callback={''} />
                        <br />
                        <input id={"fill" + this.props.id} type="hidden" value={this.state.fill}/>
                        <input id={"fillColor" + this.props.id} type="hidden" value={this.state.fillColor}/>
                        <br />
                        <br />
                    </div>
                );
            case optionTypes.Line:
                return (
                    <div id={"toolbarOption" + this.props.id} style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <input id={"noLine" + this.props.id} type="radio" name="line" value="noLine" onChange={this.handleInputChange} checked={this.state.line === 'noLine'} /><label htmlFor={"noLine" + this.props.id} >No line</label><br /><br />
                            <input id={"solidLine" + this.props.id} type="radio" name="line" value="solidLine" onChange={this.handleInputChange} checked={this.state.line === 'solidLine'} /><label htmlFor={"solidLine" + this.props.id}>Solid line</label><br />
                        </form>
                        <br />
                        <ColorPicker colors={colors} selectedColor={'#ff0000'} pickerId={this.state.id} callback={''} />
                        <br />
                        <input id={"line" + this.props.id} type="hidden" value={this.state.line}/>
                        <input id={"lineColor" + this.props.id} type="hidden" value={this.state.lineColor}/>
                        <br />
                        <br />
                    </div>
                );
            case optionTypes.Position:
                return (
                    <div id={"toolbarOption" + this.props.id} style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label htmlFor={"verticalInput"+ this.props.id}>Vertical </label>
                                <input id={"verticalInput" + this.props.id} style={{ clear: 'both', float: 'right', maxWidth: 80 }} type="number" name="posV" min="0" step="0.1" onChange={this.handleInputChange} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label htmlFor={"horizontalInput"+ this.props.id}>Horizontal position</label>
                                <input id={"horizontalInput" + this.props.id} style={{ clear: 'both', float: 'right', maxWidth: 80 }} type="number" name="posH" min="0" step="0.1" onChange={this.handleInputChange} />
                            </div>
                        </form>
                        <input id={"posH" + this.props.id} type="hidden" value={this.state.posH}/>
                        <input id={"posV" + this.props.id} type="hidden" value={this.state.posV}/>
                        <br />
                    </div>
                );
            case optionTypes.Size:
                return (
                    <div id={"toolbarOption" + this.props.id} style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label htmlFor={"heightInput"+ this.props.id}>Height (cm)</label>
                                <input id={"heightInput" + this.props.id} style={{ clear: 'both', float: 'right', maxWidth: 80 }} placeholder="cm" type="number" name="sizeHeight" min="0" step="0.01" onChange={this.handleInputChange} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label htmlFor={"widthInput"+ this.props.id}>Width (cm)</label>
                                <input id={"widthInput" + this.props.id} style={{ clear: 'both', float: 'right', maxWidth: 80 }} placeholder="cm" type="number" name="sizeWidth" min="0" step="0.01" onChange={this.handleInputChange} />
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label htmlFor={"rotationInput"+ this.props.id}>Rotation ( °)</label>
                                <input id={"rotationInput" + this.props.id} style={{ clear: 'both', float: 'right', maxWidth: 80 }} placeholder="°" type="number" name="rotation" min="0" max="360" step="1" onChange={this.handleInputChange} />
                            </div>
                        </form>
                        <input id={"sizeHeight" + this.props.id} type="hidden" value={this.state.sizeHeight}/>
                        <input id={"sizeWidth" + this.props.id} type="hidden" value={this.state.sizeWidth}/>
                        <input id={"rotation" + this.props.id} type="hidden" value={this.state.rotation}/>
                    </div>
                );
        }

    }
}
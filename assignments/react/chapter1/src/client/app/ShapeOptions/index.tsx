import * as React from 'react';

class ShapeOptionsProps {
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


export default class ShapeOptions extends React.Component<ShapeOptionsProps, any>{
    constructor(props: ShapeOptionsProps) {
        super(props);
        this.state = {
            fill: this.props.fill,
            fillColor: this.props.fillColor,
            line: this.props.line,
            lineColor: this.props.lineColor,
            posH: this.props.posH,
            posV: this.props.posV,
            sizeHeight: this.props.sizeHeight,
            sizeWidth: this.props.sizeWidth,
            rotation: this.props.rotation
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        //TODO DOES NOT WORK PROPERLY - Kolla på react-numeric-input
        if(event.target.getAttribute('data-unitType') === 'cm'){
            this.setState({
            [name]: value + " cm"
        });
        }else{
            this.setState({
            [name]: value
        });
        }

        
    }

    render() {
        // return <div style={{ backgroundColor: this.state.fillColor }}>Hellu from {this.state.fill}</div>;
        return (
            <div>
                {
                    <div id="toolbarFill">
                        <form>
                            <input type="radio" name="fill" value="noFill" onChange={this.handleInputChange} checked={this.state.fill === 'noFill'}/>No fill<br />
                            <input type="radio" name="fill" value="solidFill" onChange={this.handleInputChange} checked={this.state.fill === 'solidFill'} />Solid fill<br />
                            <input type="text" id="fillColor" hidden />
                        </form>
                        <span>Color</span>
                        <div id="colorPickerComponent0">
                        </div>
                    </div>
                }
                {
                    <div id="toolbarLine">
                        <form>
                            <input type="radio" name="line" value="noLine" onChange={this.handleInputChange} checked={this.state.line === 'noLine'}/>No line<br />
                            <input type="radio" name="line" value="solidLine" onChange={this.handleInputChange} checked={this.state.line === 'solidLine'} />Solid line<br />
                            <input type="text" id="lineColor" hidden />
                        </form>
                        <span>Color</span>
                        <div id={"colorPickerComponent1"}>
                        </div>
                    </div>
                }
                {
                    <div id="toolbarPosition">
                        <form>
                            Horizontal position<input type="number" name="posH" min="0" step="0.1" onChange={this.handleInputChange}/>
                            Vertical position<input type="number" name="posV" min="0" step="0.1" onChange={this.handleInputChange}/>
                        </form>
                    </div>
                }{
                    <div id="toolbarSize">
                        <form>
                            Height (cm) <input placeholder="3,47 cm" data-unitType="cm" type="number" name="sizeHeight" min="0" step="0.01" onChange={this.handleInputChange}/>
                            Width (cm) <input type="number" name="sizeWidth" min="0" step="0.01" onChange={this.handleInputChange}/>
                            Rotation <input type="number" name="rotation" min="0" max="360" step="1" onChange={this.handleInputChange} />
                        </form>
                    </div>
                }
                {
                    <div id="test">
                    {this.state.fill}<br/>
                    {this.state.line}<br/>
                    {this.state.posH}<br/>
                    {this.state.posV}<br/>
                    {this.state.sizeHeight}<br/>
                    {this.state.sizeWidth}<br/>
                    {this.state.rotation}<br/>

                    </div>
                }
            </div>
        );
    }
}
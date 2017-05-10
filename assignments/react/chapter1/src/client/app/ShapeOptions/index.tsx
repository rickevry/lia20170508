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


            this.setState({
                [name]: value
            });
    }

    toggleExpandTree(event) {

        let target = event.target.nextSibling;     
        let element = document.getElementById(target.id);

        element.style.display = element.style.display === 'none' ? '' : 'none';    
    }



    render() {
        return (
            <div>
                {
                    //TODO MAKE THE BEEPING ARROW TURN
                    <div className="tree-view_arrow" style={{display: 'block'}} onClick={this.toggleExpandTree}>Fill</div>
                    
                }
                {   
                    <div id="toolbarFill" style={{display: 'none'}}>
                    <hr/>
                        <form>
                            <input type="radio" name="fill" value="noFill" onChange={this.handleInputChange} checked={this.state.fill === 'noFill'} />No fill<br />
                            <input type="radio" name="fill" value="solidFill" onChange={this.handleInputChange} checked={this.state.fill === 'solidFill'} />Solid fill<br />
                            <input type="text" id="fillColor" hidden />
                        </form>
                        <span>Color</span>
                        <div id="colorPickerComponent0">
                        </div>
                       <hr/>
                    </div>                    
                }
                {
                    <div className="tree-view_arrow" style={{display: 'block'}} onClick={this.toggleExpandTree}>Line</div>
                }
                {
                    <div id="toolbarLine" style={{display: 'none'}}>
                        <form>
                            <input type="radio" name="line" value="noLine" onChange={this.handleInputChange} checked={this.state.line === 'noLine'} />No line<br />
                            <input type="radio" name="line" value="solidLine" onChange={this.handleInputChange} checked={this.state.line === 'solidLine'} />Solid line<br />
                            <input type="text" id="lineColor" hidden />
                        </form>
                        <span>Color</span>
                        
                        <div id={"colorPickerComponent1"}>
                        </div>
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{display: 'block'}} onClick={this.toggleExpandTree}>Position</div>
                }
                {
                    <div id="toolbarPosition" style={{display: 'none'}}>
                        <form>
                            Horizontal position<input type="number" name="posH" min="0" step="0.1" onChange={this.handleInputChange} />
                            Vertical position<input type="number" name="posV" min="0" step="0.1" onChange={this.handleInputChange} />
                        </form>
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{display: 'block'}} onClick={this.toggleExpandTree}>Size</div>
                }
                {
                    <div id="toolbarSize" style={{display: 'none'}}>
                        <form>
                            Height (cm) <input placeholder="3,47 cm" data-unitType="cm" type="number" name="sizeHeight" min="0" step="0.01" onChange={this.handleInputChange} />
                            Width (cm) <input type="number" name="sizeWidth" min="0" step="0.01" onChange={this.handleInputChange} />
                            Rotation <input type="number" name="rotation" min="0" max="360" step="1" onChange={this.handleInputChange} />
                        </form>
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{display: 'block'}} onClick={this.toggleExpandTree}>output</div>
                }
                {
                    <div id="test" style={{display: 'none'}}>
                        {this.state.fill}<br />
                        {this.state.line}<br />
                        {this.state.posH}<br />
                        {this.state.posV}<br />
                        {this.state.sizeHeight}<br />
                        {this.state.sizeWidth}<br />
                        {this.state.rotation}<br />

                    </div>
                }
            </div>
        );
    }
}
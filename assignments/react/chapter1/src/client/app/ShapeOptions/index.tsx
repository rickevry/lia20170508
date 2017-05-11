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

        let targetChildren = event.target.children;

        //declaration
        let targetChildId: any;

        // get the arrows parent
        let arrowParent = event.target.parentElement;
       // get the content div just below the title
        let arrowParentSibling = arrowParent.nextSibling;
        
        // if the the arrow is clicked
        if (targetChildren.length == 0) {
            element = document.getElementById(arrowParentSibling.id);
            targetChildId = arrowParent.children[0].id;
        } else {
            targetChildId = targetChildren[0].id;
        }

        //Changes the arrow and the display of the content
        if (element.style.display === 'none') {
            element.style.display = '';
            document.getElementById(targetChildId).innerHTML = '&#9660;';

        } else {
            element.style.display = 'none';
            document.getElementById(targetChildId).innerHTML = '&#9654;';
        }
    }



    render() {
        return (
            <div>
                {
                    <div className="tree-view_arrow" style={{ display: 'block' }} onClick={this.toggleExpandTree}><span id="arrow0">&#9654;</span> Fill</div>

                }
                {
                    <div id="toolbarFill" style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <input style={{ marginBottom: 10 }} type="radio" name="fill" value="noFill" onChange={this.handleInputChange} checked={this.state.fill === 'noFill'} />No fill<br />
                            <input type="radio" name="fill" value="solidFill" onChange={this.handleInputChange} checked={this.state.fill === 'solidFill'} />Solid fill<br />
                        </form>
                        <span style={{ paddingLeft: 10 }}>Color</span>
                        <div style={{ right: 0, position: 'absolute', zIndex: 9999, display: 'inline-block' }} id="colorPickerComponent0">
                        </div>
                        <br />
                        <br />
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{ display: 'block' }} onClick={this.toggleExpandTree}><span id="arrow1">&#9654;</span> Line</div>
                }
                {
                    <div id="toolbarLine" style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <input style={{ marginBottom: 10 }} type="radio" name="line" value="noLine" onChange={this.handleInputChange} checked={this.state.line === 'noLine'} />No line<br />
                            <input type="radio" name="line" value="solidLine" onChange={this.handleInputChange} checked={this.state.line === 'solidLine'} />Solid line<br />
                        </form>
                        <span style={{ paddingLeft: 10 }}>Color</span>
                        <div style={{ right: 0, position: 'absolute', zIndex: 9998, display: 'inline-block' }} id={"colorPickerComponent1"}>
                        </div>
                        <br />
                        <br />
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{ display: 'block' }} onClick={this.toggleExpandTree}><span id="arrow2">&#9654;</span> Position</div>
                }
                {
                    <div id="toolbarPosition" style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <label style={{ display: 'inline-block', width: '100%' }}>Horizontal position<input style={{ clear: 'both', float: 'right', maxWidth: 80 }} type="number" name="posH" min="0" step="0.1" onChange={this.handleInputChange} /></label><br /><br />
                            <label style={{ display: 'inline-block', width: '100%' }}>Vertical position<input style={{ clear: 'both', float: 'right', maxWidth: 80 }} type="number" name="posV" min="0" step="0.1" onChange={this.handleInputChange} /></label>
                        </form>
                        <br />
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{ display: 'block' }} onClick={this.toggleExpandTree}><span id="arrow3">&#9654;</span> Size</div>
                }
                {
                    <div id="toolbarSize" style={{ display: 'none' }}>
                        <form style={{ paddingLeft: 10 }}>
                            <label style={{ display: 'inline-block', width: '100%' }}> Height (cm)
                           <input style={{ clear: 'both', float: 'right', maxWidth: 80 }} placeholder="cm" type="number" name="sizeHeight" min="0" step="0.01" onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label style={{ display: 'inline-block', width: '100%' }}> Width (cm)
                            <input style={{ clear: 'both', float: 'right', maxWidth: 80 }} placeholder="cm" type="number" name="sizeWidth" min="0" step="0.01" onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label style={{ display: 'inline-block', width: '100%' }}> Rotation ( °)
                            <input style={{ clear: 'both', float: 'right', maxWidth: 80 }} placeholder="°" type="number" name="rotation" min="0" max="360" step="1" onChange={this.handleInputChange} />
                            </label>
                        </form>
                        <br />
                        <br />
                    </div>
                }
                {
                    <div className="tree-view_arrow" style={{ display: 'block' }} onClick={this.toggleExpandTree}><span id="arrow4">&#9654;</span> output</div>
                }
                {
                    <div id="test" style={{ display: 'none' }}>
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
import * as React from 'react';


class ShapeItemProps {
    public id: number;
    public name: string;
    public index: number;
    public data: string;
}

export default class ShapeItem extends React.Component<any, any>{
     constructor(props: ShapeItemProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
        }
     }
    
toggleExpandTree(event) {

        let target = event.target.nextSibling;
        let element = document.getElementById(target.id);
        let targetChildren = event.target.children;
        let allShapes = document.getElementsByClassName("shapeItems");

        //Changes the display of the content
        if (element.style.display === 'none') {
            Array.prototype.forEach.call(allShapes, function(child) {
                child.style.display = 'none';
            });
            element.style.display = '';

        } else {
            element.style.display = 'none';
        }
    }    

        render() {

            function getShapeItemDiv(): React.CSSProperties {
                return {
                    display: 'none',
                };
            }

            function Shapes(props) {
            return (
                <div className="shapeItems" id={"toolbarOption1" + props.id} style={getShapeItemDiv()}>
                    <ul>
                    {props.data.map((data, index) =>
                        <li id={"cat" + props.id + "shape" + index}>
                        <img src={"assets/shapes/" + data} width="64" height="64" />
                        </li>
                    )}
                    </ul>
                </div>
            );
            }

        return (
            <div className="mainStyle">
                <div className="shapeCategory" onClick={this.toggleExpandTree}><div></div>{this.props.name}</div>

                <Shapes data={this.props.data.shapes} id={1 + this.props.id} index={this.props.index}/>
            </div>
        );
}
}

 
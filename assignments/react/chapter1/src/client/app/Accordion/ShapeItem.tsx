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

        // Get Shapes div
        let target = event.target.nextSibling;
        console.log("target", target);

        // Get Shapes div
        let element = document.getElementById(target.id);
        console.log("element", element)
        
        // Get target children?
        let targetChildren = event.target.children;
        console.log("targetChildren", targetChildren);

        // hides all childes 
        let allChilds = document.getElementsByClassName("shapeItems");
        console.log("allChilds", allChilds);

        Array.prototype.forEach.call(allChilds, function(child) {
            child.style.display = 'none';
            console.log("child", child);
        });
 
        //declaration
        let targetChildId: any;
        console.log("targetChildId", targetChildId);

        // get the arrows parent
        let arrowParent = event.target.parentElement;
        console.log("arrowParent", arrowParent);
        // get the content div just below the title
        let arrowParentSibling = arrowParent.nextSibling;
        console.log("arrowParentSibling", arrowParentSibling);

        // if the the arrow is clicked
        console.log("targetChildren.length", targetChildren.length);
        if (targetChildren.length == 0) {
            element = document.getElementById(arrowParentSibling.id);
            console.log("element", element);
            targetChildId = arrowParent.children[0].id;
            console.log("targetChildId", targetChildId);
        } else {
            targetChildId = targetChildren[0].id;
            console.log("targetChildId", targetChildId);
        }

        //Changes the arrow and the display of the content
        console.log("", );
        if (element.style.display === 'none') {
            element.style.display = '';
            console.log("", );

        } else {
            element.style.display = 'none';
            console.log("", );
        }
    }    

    getShapeCategory(): React.CSSProperties {
        return {
            cursor: 'pointer',
            display: 'block',
            userSelect: 'none',
            color: '#000000',
            fontWeight: 'bold',
            background: 'lightgray',
            margin: 0,
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingBottom: '10px',
            paddingTop: '10px'
        };
    }

        render() {

            function getShapeItemDiv(): React.CSSProperties {
                return {
                    display: 'none',
                    overflow: 'auto'
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
                <div className="shapeCategory" style={this.getShapeCategory()} onClick={this.toggleExpandTree}><span> </span>{this.props.name}</div>

                <Shapes data={this.props.data.shapes} id={1 + this.props.id} index={this.props.index}/>
            </div>
        );
}
}

 
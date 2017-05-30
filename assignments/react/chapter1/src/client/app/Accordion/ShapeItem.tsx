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
            document.getElementById(targetChildId).innerHTML = '&#9662;'; //Arrow down big=9660 9662

        } else {
            element.style.display = 'none';
            document.getElementById(targetChildId).innerHTML = '&#9656;'; //Arrow right big=9658 9656
        }
    }    

    getTreeViewArrow(): React.CSSProperties {
        return {
            cursor: 'pointer',
            display: 'block',
            userSelect: 'none',
            color: '#ff3300',
            fontWeight: 'bold',
            background: '#BBBBBB',
            margin: 0,
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingBottom: '10px',
            paddingTop: '10px'
        };
    }

        getTreeViewArrowSpan() {
        return {
            color: '#000'
        };
    }

        render() {

            function getShapeItemUl(): React.CSSProperties {
                return {
                    listStyle: 'one',
                    margin: 0,
                    padding: 0,
                    paddingLeft: '30px',
                    marginBottom: '5px'
                };
            }

            function getShapeItemLl(): React.CSSProperties {
                return {
                    marginTop: '5px',
                    marginLeft: '5px',
                    display: 'inline-block',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#999999',
                    padding: 5
                };
            }

            function Shapes(props) {
            return (
                <div className="ShapeItems" id={"toolbarOption1" + props.id} style={{ display: 'none', background: 'lightgray' }}>
                    <ul style={getShapeItemUl()}>
                {props.data.map((data, index) =>
                    <li id={"cat" + props.id + "shape" + index} style={getShapeItemLl()}>
                       <img src={"assets/icons/" + data} width="32" height="32" />
                    </li>
                )}
                    </ul>
                </div>
            );
            }

        return (
            <div>
                <div className="tree-view_arrow" style={this.getTreeViewArrow()} onClick={this.toggleExpandTree}><span style={this.getTreeViewArrowSpan()} id={"arrow" + this.props.id}>&#9656;</span> {this.props.name}</div>

                <Shapes data={this.props.data.shapes} id={1 + this.props.id} index={this.props.index}/>
            </div>
        );
}
}

 
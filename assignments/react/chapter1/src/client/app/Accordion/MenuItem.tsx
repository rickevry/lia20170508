import * as React from 'react';

class MenuItemProps {
    public id: number;
    public name: string;
    public index: number;
    public data: string;
}

export default class MenuItem extends React.Component<any, any>{
     constructor(props: MenuItemProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
        }
     }
    
toggleExpandTree(event) {

        let target = event.target.nextSibling;
        console.log("target", target);
        let element = document.getElementById(target.id);
        console.log("element", element);
        let targetChildren = event.target.children;
        console.log("targetChildren", targetChildren);

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

        console.log("element.style.display", element.style.display);
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
            marginRight: 6,
            display: 'block',
            userSelect: 'none',
            color: '#ff3300',
            marginBottom: 10,
            fontWeight: 'bold'
        };
    }

        getTreeViewArrowSpan() {
        return {
            color: '#000'
        };
    }

        render() {

            function Shapes(props) {
            return (
                <div id={"toolbarOption" + props.id} style={{ display: 'none' }}>
                {props.data.map((data, index) =>
                    <div id={"cat" + props.id + "shape" + index}>
                       <img src={"assets/icons/" + data} width="32" height="32" />
                    </div>
                )}
                </div>
            );
            }

        return (
            <div>
                <div className="tree-view_arrow" style={this.getTreeViewArrow()} onClick={this.toggleExpandTree}><span style={this.getTreeViewArrowSpan()} id={"arrow" + this.props.id}>&#9656;</span> {this.props.name}</div>

                <Shapes data={this.props.data.shapes} id={this.props.id} index={this.props.index}/>
            </div>
        );
}
}

 
import * as React from 'react';

class MenuItemProps {
    public id: number;
    public name: string;
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
        return (
            <div className="tree-view_arrow" style={this.getTreeViewArrow()} onClick={this.toggleExpandTree}><span style={this.getTreeViewArrowSpan()} id={"arrow" + this.props.id}>&#9656;</span> {this.props.name}</div>
        );
    }
}


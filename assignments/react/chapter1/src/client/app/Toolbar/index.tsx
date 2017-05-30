import * as React from 'react';
import MenuItem from './MenuItem';
import ColorPicker from '../ColorPicker';
import ToolbarOption from './ToolbarOption';


export default class ToolbarOptions extends React.Component<ToolbarOption, any>{
   
    //MenuItem.id - Unique identifier
    //MenuItem.name - Name of the listpost
    //ToolbarOption.type -  [0]Fill, [1]Line, [2]Position, [3]Size
    //ToolbarOption.id - Unique identifier


    getMainStyle() {
        return {
            fontFamily: "'Tahoma', Verdana, Geneva, Tahoma, sans-serif",
            fontSize: 'x-small',
            padding: 10,
            paddingTop: 0,
            minWidth: 150
        };
    }

 
toggleMenuOptions(event) {
    let target: any = event.target;
    let targetId: number = target.getAttribute('data-idKey');

    let firstToolbar = document.getElementById('toolbar0');
    let secondToolbar = document.getElementById('toolbar1');

    if (targetId == 0) {

        firstToolbar.style.display = 'block';
        secondToolbar.style.display = 'none';
        target.style.fontWeight = 'bold';

        let targetSibling = target.nextSibling;
        targetSibling.style.fontWeight = 'normal';

    } else if (targetId == 1) {

        firstToolbar.style.display = 'none';
        secondToolbar.style.display = 'block';
        target.style.fontWeight = 'bold';

        let targetSibling = target.previousSibling;
        targetSibling.style.fontWeight = 'normal';
    }
}

render() {
    return (
        <div style={this.getMainStyle()} id="toolbarComponent">
            <div id="toolbarOptionsSelection">
                <ul style={{ padding: 0 }}>
                    <li data-idKey={0} style={{ display: 'inline', fontWeight: 'bold', marginRight: 10, cursor: 'pointer' }} onClick={this.toggleMenuOptions}>Shape Options</li>
                    <li data-idKey={1} style={{ display: 'inline', cursor: 'pointer' }} onClick={this.toggleMenuOptions}>Text Options</li>
                </ul>
            </div>
            <div id="toolbar0">
                <MenuItem id={0} name={"Fill"} />
                <ToolbarOption type={0} id={0} />

                <MenuItem id={1} name={"Line"} />
                <ToolbarOption type={1} id={1} />

                <MenuItem id={2} name={"Position"} />
                <ToolbarOption type={2} id={2} />

                <MenuItem id={3} name={"Size"} />
                <ToolbarOption type={3} id={3} />
            </div>
            <div id="toolbar1" style={{ display: 'none' }}>
                <MenuItem id={4} name={"Fill"} />
                <ToolbarOption type={0} id={4} />

            </div>
        </div>
    );
}
}
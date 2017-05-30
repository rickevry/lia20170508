import * as React from 'react';
import MenuItem from './MenuItem';
import ColorPicker from '../ColorPicker';
import ToolbarOption from '../Toolbar/ToolbarOption';


export default class ToolbarOptions extends React.Component<any, any>{
    //MenuItem.id - Unique identifier
    //MenuItem.name - Name of the listpost
    //ToolbarOption.type -  [0]Fill, [1]Line, [2]Position, [3]Size
    //ToolbarOption.id - Unique identifier



    render() {
            function ShapesCategories(props) {
            return (
                <div>
                {props.posts.map((category, index) =>
                    <MenuItem data={category} index={index} id={category.id} name={category.title} />
                )}
                </div>
            );
            }


            const categorys = [
                {
                    title: "General",
                    id: 0,
                    shapes: ["icon0101.png", "icon0102.png", "icon0103.png", "icon0104.png", "icon0105.png"]
                },
                {
                    title: "Misc",
                    id: 1,
                    shapes: ["icon0201.png", "icon0202.png", "icon0203.png", "icon0204.png"]
                },
                {
                    title: "Database",
                    id: 2,
                    shapes: ["icon0301.png", "icon0302.png", "icon0303.png", "icon0304.png", "icon0305.png", "icon0306.png", "icon0307.png"]
                },
                {
                    title: "Flowchart",
                    id: 3,
                    shapes: ["icon0401.png", "icon0402.png", "icon0403.png", "icon0404.png"]
                },
            ];



        return (

            <div style={{ padding: 10, minWidth: 200 }} id="toolbarComponent">
                
                <div id="shapeCategories">
                    
                    <ShapesCategories posts={categorys} />
                    {/*<ToolbarOption type={1} id={1} />*/}

                    {/*<ToolbarOption type={2} id={2} />*/}

                    {/*<ToolbarOption type={3} id={3} />*/}


                </div>
            </div>
        );
    }
}
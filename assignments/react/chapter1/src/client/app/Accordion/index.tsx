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
                    shapes: ["icon0101.ico", "icon0102.ico", "icon0103.ico", "icon0104.ico", "icon0105.ico"]
                },
                {
                    title: "Misc",
                    id: 1,
                    shapes: ["icon0201.ico", "icon0202.ico", "icon0203.ico", "icon0204.ico"]
                },
                {
                    title: "Database",
                    id: 2,
                    shapes: ["icon0301.ico", "icon0302.ico", "icon0303.ico", "icon0304.ico", "icon0305.ico", "icon0306.ico", "icon0307.ico"]
                },
                {
                    title: "Flowchart",
                    id: 3,
                    shapes: ["icon0401.ico", "icon0402.ico", "icon0403.ico", "icon0404.ico"]
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
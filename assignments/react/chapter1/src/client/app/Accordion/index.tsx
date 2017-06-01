import * as React from 'react';
import ShapeItem from './ShapeItem';
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
                    <ShapeItem data={category} index={index} id={category.id} name={category.title} />
                )}
                </div>
            );
            }


            let categorys = [
                {
                    title: "Flowchart",
                    id: 0,
                    shapes: ["flowchart/database.png", "flowchart/decision.png", "flowchart/process.png", "flowchart/merge.png", "flowchart/alt_process.png", "flowchart/card.png", "flowchart/data.png", "flowchart/prep.png", "flowchart/document.png", "flowchart/stored_data.png"]
                },
                {
                    title: "Electric",
                    id: 1,
                    shapes: ["electric/amplifier.png", "electric/acpowersup.png", "electric/cap_nonpolar.png", "electric/grd_earth.png", "electric/grd_sig.png", "electric/photoresistor.png", "electric/spst_no.png", "electric/spst_nc.png", "electric/spdt_toggle1.png", "electric/diode1.png", "electric/fuse.png", "electric/generator.png", "electric/inductor.png", "electric/pb_nc.png", "electric/pb_no.png", "electric/npn.png", "electric/resistor.png"]
                },
                {
                    title: "General",
                    id: 2,
                    shapes: ["flowchart/merge.png", "flowchart/alt_process.png", "flowchart/card.png", "flowchart/data.png", "flowchart/prep.png", "flowchart/document.png", "flowchart/stored_data.png"]
                },
                {
                    title: "Misc",
                    id: 3,
                    shapes: ["flowchart/data.png", "flowchart/prep.png", "flowchart/document.png", "flowchart/stored_data.png"]
                },
                {
                    title: "Database",
                    id: 4,
                    shapes: ["flowchart/database.png", "flowchart/decision.png", "flowchart/process.png"]
                },
            ];



        return (

            <div style={{ padding: 0, minWidth: 200 }} id="toolbarComponent">
                
                <div id="shapeCategories">
                    
                    <ShapesCategories posts={categorys} />

                </div>
            </div>
        );
    }
}
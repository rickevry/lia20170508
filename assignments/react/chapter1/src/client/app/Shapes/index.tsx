import * as React from 'react';
import CategoryItem from './CategoryItem';


let categories = [
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

export default class Shapes extends React.Component<any, any>{

    getShapeCSS(): React.CSSProperties {
        return {
            display: 'none',
        };
    }

    renderShapes(shapes:any) {
        return (
            <div className="shapeItems" id={"toolbarOption1" + props.id} style={this.getShapeCSS()}>
                <ul>
                    {shapes.map((data, index) =>
                        <li id={"cat" + props.id + "shape" + index}>
                            <img src={"assets/shapes/" + data} width="64" height="64" />
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    renderCategory(category:any) {
        return (
            <div className="mainStyle">
                <div className="shapeCategory" onClick={this.toggleExpandTree}><div></div>{this.props.name}</div>
                {this.renderShapes(category.shapes)}
            </div>
        );
    }

    renderCategories(categories) {
        return (
            <div>
                {categories.map((category, index) =>
                    {renderCategory(category)}
                )}
            </div>
        );
    }

    render() {
        return (
            <div style={{ padding: 0, minWidth: 200 }} id="toolbarComponent">
                <div id="shapeCategories">
                    {this.renderCategories(categories)}
                </div>
            </div>
        );
    }
}
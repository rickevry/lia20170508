import * as React from 'react';

class ShapesProps {
    public id: number;
    public name: string;
    public index: number;
    public data: string;
}

export default class Shapes extends React.Component<any, any>{
     constructor(props: ShapesProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
        }
     }


        render() {
        return (
            <div className="" id={this.props.id}> {this.props.name}</div>
        );
}
}

 
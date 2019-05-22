import React from 'react';



export class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        return (
            <toggle
                on={this.props.on}
                type={'default'}
                height={0.02}
                localPosition={[-0.1, 0.2, 0]}
                onClick={this.props.onClick}
            >Animation stop/start</toggle>
        );
    }
}
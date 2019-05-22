import React from 'react'

export class Button extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <button
                localPosition={[-0.2, 0.4, 0]}
                text="Switch Animation"
                width={0.35}
                height={0.09}
                onClick={this.props.onClick}
            ></button>
        );
    }
}
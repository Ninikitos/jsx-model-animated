import React from '../../node_modules/react/index.js';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return React.createElement("button", {
      localPosition: [-0.2, 0.4, 0],
      text: "Switch Animation",
      width: 0.35,
      height: 0.09,
      onClick: this.props.onClick
    });
  }

}

export { Button };

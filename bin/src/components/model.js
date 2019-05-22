import React from '../../node_modules/react/index.js';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const animation = {
      name: this.props.animation
    };
    return React.createElement("model", {
      localPosition: [0.2, 0.2, 0],
      localScale: [0.0075, 0.0075, 0.0075],
      animation: animation,
      modelPath: 'resources/turkey4.fbx',
      materialPath: 'resources/turkey.kmat',
      texturePath: 'resources/turkey_baseColor.png',
      textureName: 'turkey_material'
    });
  }

}

export { Model };

import React from '../../node_modules/react/index.js';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    print("Create Model");
  }

  render() {
    const animation = {
      name: this.props.animation
    };
    print(this.props.animationPlaybackSpeed);
    return React.createElement("model", {
      animationPlaybackSpeed: this.props.animationPlaybackSpeed,
      localPosition: [0.2, 0.2, 0],
      localScale: [0.0075, 0.0075, 0.0075],
      animation: animation,
      modelPath: 'resources/turkey4.fbx',
      materialPath: 'resources/turkey.kmat',
      texturePath: 'resources/turkey_baseColor.png',
      textureName: 'turkey_material',
      animationPauseState: this.props.animationPauseState
    });
  }

}

export { Model };

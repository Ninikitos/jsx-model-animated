import React from 'react';

export class Slider extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  render () {
    return (
      <view name="main-slider">
        <slider
          onSliderChanged={this.props.onSliderChanged}
          localPosition={[-0.2, 0, 0]}
          // height={0.02}
          width={0.5}
          min={0}
          max={2}
        ></slider>
        <text
          localPosition={[-0.45, -0.1, 0]}
          textSize={0.05}
        >Change animation speed</text>
      </view >
    );
  }
}

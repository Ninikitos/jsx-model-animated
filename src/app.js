import React from "react";
import { Model } from "./components/model.js";
import { Toggle } from "./components/toggle.js";
import { Slider } from "./components/slider.js";
import { Button } from "./components/button.js";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { animation: props.animation, counter: 0, toggleState: props.toggleState };
    this.animations = ["idle", "walking", "spotted"];
    this.onSliderChanged = this.onSliderChanged.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onToggleChanged = this.onToggleChanged.bind(this);

  }

  onButtonClick(event) {
    const counter = this.state.counter < 2 ? this.state.counter + 1 : 0;
    const animation = this.animations[counter];
    this.setState(state => {
      print(counter.toString());
      print(animation);
      return { counter: counter, animation: animation };

    });

  }

  onToggleChanged(event) {

    //const toggleState = this.toggleState;

    print(event.toString());
    // this.setState(state => {

    //   return { toggleState: toggleState };
    // });
  }

  // const toggle = this.addToggle([-0.25, -0.25, 0], 'Pause');
  // toggle.onActivateSub((event) => {
  //   model.setAnimationPauseState(toggle.getOn());
  // })

  onSliderChanged(event) {
    const sliderValue = this.state.sliderValue;
    print(event.toString());
    print(JSON.stringify(event.getUiNode()));
    // this.setState(state => {
    //   print(sliderValue.toString());
    //   return { sliderValue };
    // });
    print(JSON.stringify(event.getUiNode().getValue()));
  }

  // const slider = this.addSlider([0, -0.25, 0], 0, 100);
  // slider.onSliderChangedSub((event) => {
  //   model.setAnimationPlaybackSpeed(slider.getValue());
  // });

  render() {
    return (
      <view name="main-view">
        <Model animation={this.state.animation}></Model>
        <Toggle onClick={this.onToggleChanged} on={this.state.toggleState}></Toggle>
        <Slider onSliderChanged={this.onSliderChanged}></Slider>
        <Button onClick={this.onButtonClick}></Button>
      </view >
    );
  }
}

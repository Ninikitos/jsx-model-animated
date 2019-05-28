import React from '../node_modules/react/index.js';
import { Model } from './components/model.js';
import { Toggle } from './components/toggle.js';
import { Slider } from './components/slider.js';
import { Button } from './components/button.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: props.animation,
      counter: 0,
      toggleState: props.toggleState,
      animationPauseState: false
    };
    this.animations = ["idle", "walking", "spotted"];
    this.onSliderChanged = this.onSliderChanged.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onToggleChanged = this.onToggleChanged.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onButtonClick(event) {
    const counter = this.state.counter < 2 ? this.state.counter + 1 : 0;
    const animation = this.animations[counter];
    this.setState(state => {
      print(counter.toString());
      print(animation);
      return {
        counter: counter,
        animation: animation,
        animationPauseState: state.animationPauseState,
        toggleState: state.toggleState
      };
    });
  }

  onToggleChanged(event) {
    //const toggleState = !this.state.toggleState;
    // if(this.state.toggleState === true) {
    //   this.state.toggleState === false;
    // } else {
    //   this.state.toggleState === true;
    // }
    print(event.toString());
    this.setState(state => {
      return {
        counter: state.counter,
        animation: state.animation,
        animationPauseState: !state.animationPauseState,
        toggleState: !state.toggleState
      };
    });
  }

  onSliderChanged(event) {
    print(event.toString());
    print(JSON.stringify(event.getUiNode()));
    this.setState(state => {
      print(sliderValue.toString());
      return {
        sliderValue
      };
    });
    print(JSON.stringify(event.getUiNode().getValue()));
  } // const slider = this.addSlider([0, -0.25, 0], 0, 100);
  // slider.onSliderChangedSub((event) => {
  //   model.setAnimationPlaybackSpeed(slider.getValue());
  // });


  onUpdate(delta) {
    print(delta.toString());
  }

  render() {
    return React.createElement("view", {
      name: "main-view"
    }, React.createElement(Model, {
      animation: this.state.animation,
      animationPauseState: this.state.animationPauseState
    }), React.createElement(Toggle, {
      onClick: this.onToggleChanged,
      on: this.state.toggleState
    }), React.createElement(Slider, {
      onSliderChanged: this.onSliderChanged
    }), React.createElement(Button, {
      onClick: this.onButtonClick
    }));
  }

}

export { App };

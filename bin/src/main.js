import '../node_modules/magic-script-polyfills/src/polyfills.js';
import './global-scope.js';
import React from '../node_modules/react/index.js';
import mxs from '../node_modules/magic-script-components/index.js';
import { App } from './app.js';

// Add support for things like setTimeout, setInterval and fetch.
// The 0.5 value is the number of seconds to call `updateLoop` in an interval if
// there are no other events waking the event loop.
// export default new App(0.5);

mxs.bootstrap(React.createElement(App, {
  animation: "Idle",
  type: "landscape",
  volumeSize: [1, 1, 1],
  caption: "My App Caption",
  toggleState: true
}));

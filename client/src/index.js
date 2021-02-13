import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// window.MyWidget = function(idElement, param1, param2) {
//   let config = {param1, param2};
//   ReactDOM.render(<App config={config} />, document.getElementById(idElement));
//   return this;
// }
// window.React=React
// window.myApp = (config) => {
//   ReactDOM.render(<App config={config} />, document.getElementById(config.append));
//   return this
// }
let config = {
  roomName: 'random-chat-jasndja4s45asd4as1d6sa1d5asd15a6',
  displayName: 'Roshan',
  append: 'root',
  userId: {
    email: "mroshan@gmail.com",
  }
}

ReactDOM.render(<App config={config} />, document.getElementById(config.append));

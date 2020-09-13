const React = require('react');

let count = 15;

const minusButton = React.createElement("button", {
  children: "-",
  onClick: () => {
    count--;
    ReactDOM.render(App, document.getElementById("root"));
  },
});

const plusButton = React.createElement("button", {
  children: "+",
  onClick: () => {
    count++;
    ReactDOM.render(App, document.getElementById("root"));
  },
});

const counterDisplay = React.createElement("p", { children: count });

const App = React.createElement("div", { children: [minusButton, counterDisplay, plusButton] });

module.exports = () => App;

let count = 15;

const minusButton = () => React.createElement("button", {
  children: "-",
  onClick: () => {
    console.log('minus button pressed');
    count--;
    ReactDOM.render(App(), document.getElementById("root"));
  },
});

const plusButton = () => React.createElement("button", {
  children: "+",
  onClick: () => {
    console.log('plus button pressed');
    count++;
    ReactDOM.render(App(), document.getElementById("root"));
  },
});

const counterDisplay = () => React.createElement("p", { children: count });

const App = () => React.createElement("div", { children: [minusButton(), counterDisplay(), plusButton()] });

ReactDOM.hydrate(App(), document.getElementById("root"));

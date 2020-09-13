const express = require("express");
const { renderToString } = require("react-dom/server");
const App = require("./App");
const React = require("react");
const template = require("./template");

const app = express();
const port = "3000";

app.use(express.static("./src/client"));

app.get("/", (req, res) => {
  const app = renderToString(React.createElement(App));
  return res.send(template.replace("<div id='root'></div>", `<div id="root">${app}</div>`));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

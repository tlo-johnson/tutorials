module.exports = `
  <body>
    <p>react rendering should happen underneath here</p>
    <div id='root'></div>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script type='text/javascript' src='/index.js'></script>
  </body>
`;

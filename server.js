const app = require('express')();

app.get('/', (req, res) => res.send(`
<h1>Website Under Development</h1>
`));

module.exports = () => {
  app.listen(3000);
}
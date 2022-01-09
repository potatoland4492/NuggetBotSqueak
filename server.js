const app = require('express')();

app.get('/', (req, res) => res.send("IT'S ALIVE!!! Yeah, the bot's ready. Now close this and get back to Discord."));

module.exports = () => {
  app.listen(3000);
}
const app = require("express")();

app.get("/", (req, res) => { res.send(`
<body style="margin:0;padding:0;">
<iframe src="https://potatoland4492.github.io/NuggetBotSqueak-Site/" style="border:none;width:100vw;height:100vh;margin:0;padding:0;">
</body>
`)});

module.exports = () => {
  app.listen(3000);
}
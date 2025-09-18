const app = require("express")();
const PORT = 3010;

app.get("/ano/:ano", async (req, res) => {
  try {
    const anoDigitado = parseInt(req.params.ano);

    if (isNaN(anoDigitado)) {
      res.status(400).send("ERRO - digite um ano válido!");
    } else {
      if ((anoDigitado % 4 == 0 && anoDigitado % 100 != 0) || anoDigitado % 400 == 0) {
        res.send(`O ano ${anoDigitado} é bissexto!`);
      } else {
        res.send(`O ano ${anoDigitado} não é bissexto!`);
      }
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// start server on the port 3010
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

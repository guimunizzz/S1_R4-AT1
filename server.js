const app = require("express")();
const PORT = 3012;

app.get("/saudacao/:nome", async (req, res) => {
  try {
    const nomeUsuario = req.params.nome;
    const { hora } = req.query;
    const horaDigitada = parseInt(hora);

    if (isNaN(horaDigitada)) {
      res.status(400).send("ERRO - digite uma numero válido!");
    } else {
      if (horaDigitada >= 6 && horaDigitada < 12) {
        res.send(`Bom dia, ${nomeUsuario}`);
      } else if (horaDigitada >= 12 && horaDigitada < 18) {
        res.send(`Boa tarde, ${nomeUsuario}`);
      } else if ((horaDigitada >= 18 && horaDigitada <= 23) || (horaDigitada >= 0 && horaDigitada < 6)) {
        res.send(`Boa noite, ${nomeUsuario}`);
      } else {
        res.status(400).send("ERRO - digite uma hora válida!");
      }
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// start server on the port 3012
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

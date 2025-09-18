const app = require("express")();
const PORT = 3014;

app.get("/imc", async (req, res) => {
  try {
    const { peso, altura } = req.query;
    const pesoDigitado = parseFloat(peso);
    const alturaDigitado = parseFloat(altura);

    if (isNaN(pesoDigitado) || isNaN(alturaDigitado)) {
      res.status(400).send("ERRO - digite numeros válidos!");
    } else {
      const imc = pesoDigitado / (alturaDigitado * alturaDigitado);
      const imcFormatado = imc.toFixed(2);

      if (imcFormatado < 18.5) {
        res.send(`Seu imc é ${imcFormatado}, sua classificação é baixo peso!`);
      } else if (imcFormatado >= 18.5 && imcFormatado < 25) {
        res.send(`Seu imc é ${imc}, sua classificação é normal!`);
      } else if (imcFormatado >= 25 && imcFormatado < 30) {
        res.send(`Seu imc é ${imcFormatado}, sua classificação é sobrepeso!`);
      } else if (imcFormatado >= 30) {
        res.send(`Seu imc é ${imcFormatado}, sua classificação é obesidade!`);
      }
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// start server on the port 3014
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

const app = require("express")();
const PORT = 3008;

app.get("/operacao/:tipo", async (req, res) => {
  try {
    const operador = req.params.tipo;
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      res.status(400).send("ERRO - digite um numero!");
    } else {
      switch (operador) {
        case "soma":
          const adicao = n1 + n2;
          res.send(`O resultado da soma é ${adicao}`);
          break;

        case "subtracao":
          const subtrair = n1 - n2;
          res.send(`O resultado da subtração é ${subtrair}`);
          break;

        case "multiplicacao":
          const multiplicar = n1 * n2;
          res.send(`O resultado da subtração é ${multiplicar}`);
          break;

        case "divisao":
          if (n2 == 0) {
            res.status(400).send("ERRO - Não é possivel dividir por zero!");
          } else {
            const dividir = n1 / n2;
            res.send(`O resultado da subtração é ${dividir}`);
            break;
          }
        default:
          res.send("Digite uma operação valida");
          break;
      }
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// start server on the port 3008
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

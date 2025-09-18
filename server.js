const app = require("express")();
const PORT = 3004;

app.get("/soma/:num1/:num2", async (req, res) => {
  try {
    const n1 = parseFloat(req.params.num1);
    const n2 = parseFloat(req.params.num2);
    if (isNaN(n1) || isNaN(n2)) {
      res.status(400).send("ERRO - digite um numero!");
    } else {
      const adicao = n1 + n2;
      res.send(`O resultado da soma é ${adicao}`);
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.get("/subtracao/:num1/:num2", async (req, res) => {
  try {
    const n1 = parseFloat(req.params.num1);
    const n2 = parseFloat(req.params.num2);
    if (isNaN(n1) || isNaN(n2)) {
      res.status(400).send("ERRO - digite um numero!");
    } else {
      const subtrair = n1 - n2;
      res.send(`O resultado da soma é ${subtrair}`);
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});
app.get("/multiplicacao/:num1/:num2", async (req, res) => {
  try {
    const n1 = parseFloat(req.params.num1);
    const n2 = parseFloat(req.params.num2);
    if (isNaN(n1) || isNaN(n2)) {
      res.status(400).send("ERRO - digite um numero!");
    } else {
      const multiplicar = n1 * n2;
      res.send(`O resultado da soma é ${multiplicar}`);
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});
app.get("/divisao/:num1/:num2", async (req, res) => {
  try {
    const n1 = parseFloat(req.params.num1);
    const n2 = parseFloat(req.params.num2);
    if (isNaN(n1) || isNaN(n2)) {
      res.status(400).send("ERRO - digite um numero!");
    } else {
      if (n2 == 0) {
        res.status(400).send("ERRO - Não é possivel dividir por zero!");
      } else {
        const dividir = n1 / n2;
        res.send(`O resultado da soma é ${dividir}`);
      }
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// start server on the port 3004
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

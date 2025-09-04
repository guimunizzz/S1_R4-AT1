const app = require('express')();

const PORT = 3004;

app.get('/soma/:num1/:num2', async(req, res) => {
  try {
    const adicao = parseInt(req.params.num1) + parseInt(req.params.num2)
    if(isNaN(req.params.num1 && req.params.num2)) {
      res.send("ERRO - digite um numero!");
    } else{
      res.send(`O resultado da soma é ${adicao}`)
    }
  } catch (error) {
      res.status(500).json({ erro: error.message});
  }
})

app.get('/subtracao/:num1/:num2', async(req, res) => {
  try {
    const subtrair = parseInt(req.params.num1) - parseInt(req.params.num2)
    if(isNaN(req.params.num1 && req.params.num2)) {
      res.send("ERRO - digite um numero!");
    } else {
      res.send(`O resultado da soma é ${subtrair}`)
    }
  } catch (error) {
      res.status(500).json({ erro: error.message});
  }
})
app.get('/multiplicacao/:num1/:num2', async(req, res) => {
  try {
    const multiplicar = parseInt(req.params.num1) * parseInt(req.params.num2)
    if(isNaN(req.params.num1 && req.params.num2)) {
      res.send("ERRO - digite um numero!");
    } else {
      res.send(`O resultado da soma é ${multiplicar}`)
    }
  } catch (error) {
      res.status(500).json({ erro: error.message});
  }
})
app.get('/divisao/:num1/:num2', async(req, res) => {
  try {
    const dividir = parseInt(req.params.num1) / parseInt(req.params.num2)
    if(isNaN(req.params.num1 && req.params.num2)) {
      res.send("ERRO - digite um numero!");
    } else {
      if (req.params.num2 != 0) {
        res.send(`O resultado da soma é ${dividir}`)
      } else {
        res.send("Erro, não é possivel realizar a divisão por zero")
      }
    }
  } catch (error) {
      res.status(500).json({ erro: error.message});
  }
})





// start server on the port 3004
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
})
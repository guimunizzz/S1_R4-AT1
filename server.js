const app = require('express')();

const PORT = 3004;

app.get('/soma/:num1/:num2', async(req, res) => {
  try {
    const adicao = parseInt(req.params.num1) + parseInt(req.params.num2)
    res.send(`O resultado da soma é ${adicao}`)
  } catch (error) {
      res.status(500).json({ erro: error.message});
  }
})





// start server on the port 3004
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
})
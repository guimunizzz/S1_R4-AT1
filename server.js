const app = require('express')();

const PORT = 3006;

async function calculadora(operacao, num1, num2) {
  try {
    if (operacao == soma) {
      resultado = num1 + num2;
    } else if (operacao == subtracao) {
      resultado = num1 - num2;
    } else if (operacao == multiplicacao) {
      resultado = num1 * num2;
    } else if (operacao == divisao) {
      resultado = num1 / num2;
    }
    return resultado
  } catch (error) {
    throw new Error(`Erro ao ler o arquivo JSON: ${error} `);
  }
}

app.get('/calculadora', async(req, res) => {
  try {
    const { operacao } = req.query;
    const { num1 } = req.query;
    const { num2 } = req.query;

    res.send()
  } catch (error) {    
    res.status(500).json({ erro: error.message});
  }
});

// start server on the port 3006
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
})
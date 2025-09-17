const app = require('express')();

const PORT = 3006;

function calculadora(operacao, num1, num2) {
  if (operacao === "soma") {
      return num1 + num2;
    } else if (operacao === "subtracao") {
      return num1 - num2;
    } else if (operacao === "multiplicacao") {
      return num1 * num2;
    } else if (operacao === "divisao") {
      if (num2 == 0) {
        throw new Error("Divisão por zero não é permitida.");
      }
      return num1 / num2;
    } else {
      throw new Error('Operação inválida. Use "soma", "subtracao", "multiplicacao" ou "divisao".');
    }
}

app.get('/calculadora', async(req, res) => {
  try {
    const { num1 ,num2 , operacao } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    resultadoFinal = calculadora(operacao, n1, n2);
    res.status(200).send(`Resultado: ${resultadoFinal}`);
  } catch (error) {    
    res.status(400).send(`Erro: ${error.message}`);
  }
});

// start server on the port 3006
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
})
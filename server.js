const app = require('express')();

const PORT = 3008;


// start server on the port 3006
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
})
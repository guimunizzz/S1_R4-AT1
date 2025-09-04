const app = require('express')();

const PORT = 3006;



// start server on the port 3004
app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
})
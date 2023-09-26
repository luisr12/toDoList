
const app = require('./app');

const PORT = 3333;  // Defina a porta desejada, por exemplo, 3333


app.listen(PORT, () => {
    console.log(`Api rodando na porta ${PORT}`);
});
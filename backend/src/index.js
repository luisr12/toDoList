const express = require('express');

const app = express();
const PORT = 3333;  // Defina a porta desejada, por exemplo, 3333

app.get('/', (req,res)=>{
    res.send(`Raiz`);
})

app.listen(PORT, () => {
    console.log(`Api rodando na porta ${PORT}`);
});
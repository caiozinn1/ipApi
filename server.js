const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const ipAddress = response.data.ip;

    const responseData = { ip: ipAddress };
    res.json(responseData);
  } catch (error) {
    console.error('Erro ao obter o endereço IP:', error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

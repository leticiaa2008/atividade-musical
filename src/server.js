const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensagem: '🎵 Bem-vindo à API da Loja de Instrumentos Musicais 🎶',
    versao: '1.0.0',
    endpoints: {
      instrumentos: '/api/produtos',
      clientes: '/api/clientes',
      pedidos: '/api/pedidos'
    }
  });
});

app.use('/api/produtos', produtoRoutes);   // Aqui produtos = instrumentos
app.use('/api/clientes', clienteRoutes);
app.use('/api/pedidos', pedidoRoutes);

app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada na Loja de Instrumentos'
  });
});

app.listen(PORT, () => {
  console.log(`🎸 Servidor rodando na porta ${PORT}`);
  console.log(`🎧 Acesse: http://localhost:${PORT}`);
});

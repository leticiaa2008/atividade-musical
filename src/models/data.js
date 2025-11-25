let produtos = [
  {
    id: 1,
    nome: "Violão Clássico",
    categoria: "Cordas",
    preco: 450.00,
    descricao: "Violão clássico acústico para iniciantes",
    estoque: 12
  },
  {
    id: 2,
    nome: "Teclado Digital 61 teclas",
    categoria: "Teclas",
    preco: 1200.00,
    descricao: "Teclado digital com ritmos e acompanhamento",
    estoque: 8
  },
  {
    id: 3,
    nome: "Bateria Acústica",
    categoria: "Percussão",
    preco: 3500.00,
    descricao: "Bateria completa 5 peças para estudos e shows",
    estoque: 3
  }
];

let clientes = [
  {
    id: 1,
    nome: "Lucas Martins",
    email: "lucas@email.com",
    telefone: "(11) 97555-1234",
    dataCadastro: "2024-01-10"
  },
  {
    id: 2,
    nome: "Ana Ribeiro",
    email: "ana@email.com",
    telefone: "(11) 98123-9988",
    dataCadastro: "2024-03-22"
  }
];

let pedidos = [
  {
    id: 1,
    clienteId: 1,
    itens: [
      { produtoId: 1, quantidade: 1, precoUnitario: 450.00 },
      { produtoId: 2, quantidade: 1, precoUnitario: 1200.00 }
    ],
    valorTotal: 1650.00,
    status: "concluído",
    data: "2024-11-25T10:30:00"
  }
];

module.exports = { produtos, clientes, pedidos };

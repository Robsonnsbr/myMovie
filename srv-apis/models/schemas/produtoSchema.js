const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
    codigo: Number,
    nome: { type: String, required: [true, "Nome é obrigatório!"] },
    descricao: Object,
    peso: Number,
    foto: String,
    desconto: Number,
    pontosDasAvaliacoes: Number,
    totalDeAvaliacoes: Number,
    disponibilidade: Number,
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: "categoria" },
    quantidade: Number,
});

module.exports = produtoSchema;

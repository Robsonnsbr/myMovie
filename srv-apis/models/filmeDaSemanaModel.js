const mongoose = require("mongoose");

const filmeDaSemanaSchema = new mongoose.Schema({
    codigo: Number,
    produto: { type: mongoose.Schema.Types.ObjectId, ref: "produto" },
});

module.exports = mongoose.model("filmeDaSemana", filmeDaSemanaSchema);

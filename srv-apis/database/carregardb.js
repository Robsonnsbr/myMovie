require("./mongodb");
const mongoose = require("mongoose");

const perfilModel = require("../models/perfilModel");
const perfis = require("./perfis.json");

const filmeDaSemanaModel = require("../models/filmeDaSemanaModel");
const filmeDaSemana = require("./filmeDaSemana.json");

const categoriaModel = require("../models/categoriaModel");
const categorias = require("./categorias.json");

const usuarioModel = require("../models/usuarioModel");
const usuarios = require("./usuarios.json");

const produtoModel = require("../models/produtoModel");
const produtos = require("./produtos.json");

async function carregarDados() {
    try {
        await perfilModel.deleteMany({});
        for (const perfil of perfis) {
            await perfilModel.create(perfil);
        }
        console.log("Carga de perfis concluída!");

        await categoriaModel.deleteMany({});
        for (const categoria of categorias) {
            await categoriaModel.create(categoria);
        }
        console.log("Carga de categorias concluída!");

        await usuarioModel.deleteMany({});
        for (const usuario of usuarios) {
            await perfilModel
                .findOne({ codigo: usuario.perfil })
                .then((perfil) => {
                    usuario.perfil = perfil._id;
                    return usuario;
                })
                .then(async (usuarioAlterado) => {
                    await usuarioModel.create(usuarioAlterado);
                });
        }
        console.log("Carga de usuarios concluída!");

        await produtoModel.deleteMany({});
        for (const produto of produtos) {
            await categoriaModel
                .findOne({ codigo: produto.categoria })
                .then((categoria) => {
                    produto.categoria = categoria._id;
                    return produto;
                })
                .then(async (produtoAlterado) => {
                    await produtoModel.create(produtoAlterado);
                });
        }
        console.log("Carga de produtos concluída!");

        await filmeDaSemanaModel.deleteMany({});
        await produtoModel
            .findOne({ codigo: filmeDaSemana.produto })
            .then((produto) => {
                filmeDaSemana.produto = produto._id;
                return filmeDaSemana;
            })
            .then(async (filmeAlterado) => {
                await filmeDaSemanaModel.create(filmeAlterado);
            });
        console.log("Carga de filme da semana concluída!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();

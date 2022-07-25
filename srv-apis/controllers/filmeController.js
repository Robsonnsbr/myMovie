const filmeModel = require("../models/filmeDaSemanaModel");

class FilmeController {
    async carregar(req, res) {
        const filme = await filmeModel
            .findOne({ codigo: 1 })
            .populate("produto");
        res.status(200).json(filme);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await filmeModel.findOne({ codigo: codigo }))._id);
        await filmeModel.findOneAndUpdate(String(_id), req.body);
        res.status(200).send();
    }
}

module.exports = new FilmeController();

const User = require('../model/User');

module.exports = {

    async index (req, res) {
        const user = await User.findAll({});
        console.log(user);
        return res.json(user);
    },

    async store (req, res) {

        const { name, email, usuario, senha } = req.body;

        const user = await User.create({
            name, email, usuario, senha
        });

        console.log(user);
        return res.json(user);

    },

}
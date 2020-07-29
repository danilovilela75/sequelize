const User = require('../model/User');
const Address = require('../model/Address');

module.exports = {

    async index (req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'addresses'}
        }) ;

        console.log(user);
        return res.json(user);

    },

    async store (req,res) {

        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: "User not found"});
        }

        const address = await Address.create({
            zipcode, 
            street, 
            number, 
            user_id,
        });

        console.log(address);

        return res.json(address);

    }

}
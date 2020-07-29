const { Router } = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = Router();

routes.get("/", (req, res) => {
    return res.json({ server_status: "iniciado"});
});

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.post('/users/:user_id/address', AddressController.store);
routes.get('/users/:user_id/address', AddressController.index);

module.exports = routes;
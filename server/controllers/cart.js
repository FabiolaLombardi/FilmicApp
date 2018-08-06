const db = require('./../helpers/db');
const cartQueries = require('./../helpers/queries').cart;

let controllers = {};

controllers.add = async (req,res) => {
    const send = (status,body) => res.status(status).send({ status, body });
    const cartId = req.session.passport.user.cartid;
    const { productId, quantity } = req.body

    try {
        const itemId = await db.one(cartQueries.add, [cartId, productId, quantity, new Date()])
        if(itemId) {
            send(200, { message: 'success', itemId});
        }
    } catch(err) {
        send(500, err.message || 'Try again')
    }

}

controllers.update = async (req, res) => {
    const send = (status, body) => res.status(status).send({ status, body });
    const { id, status } = req.body;

    try {
        await db.none(cartQueries.update, [status, id])
        send(200, {message: 'success'});
    } catch (err) {
        console.log(err);
        send(500, err.message || 'Try again')
    }

}

controllers.getAll = async (req, res) => {
    const send = (status, body) => res.status(status).send({ status, body });
    const cartId = req.session.passport.user.cartid;

    try {
        const items = await db.one(cartQueries.getAll, cartId)
        if (items) {
            send(200, items);
        }
    } catch (err) {
        console.log(err);
        send(500, err.message || 'Try again')
    }

}

controllers.get = async (req,res) => {
    const send = (status,body) => res.status(status).send({ status, body });
    const cartId = req.session.passport.user.cartid;
    const type = req.params.type;

    try {
        const items = await db.one(cartQueries.get, [cartId,type])
        if(items) {
            send(200, items);
        }
    } catch(err) {
        send(500, err.message || 'Try again')
    }

}

module.exports = controllers
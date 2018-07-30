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

module.exports = controllers
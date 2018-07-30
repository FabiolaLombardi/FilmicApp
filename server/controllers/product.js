const db = require('./../helpers/db');
const productQueries = require('./../helpers/queries').product;

let controllers = {};

controllers.add = async (req,res) => {
  const send = (status,body) => res.status(status).send({ status, body });
  const path = req.file.path.split('public\\')[1];
  const { category, title, description, price } = req.body;
  try {
    const product = await db.one(productQueries.addProduct, [category, title, description, price, path]);
    if(product) {
      send(200, { message: 'Success', product });
    } else {
      send(200, 'Try again');
    }
  } catch(err) {
    send(500, err.message || 'Try again')
  }
}

controllers.find = async (req,res) => {
  const send = (status, body) => res.status(status).send({ status, body });
  const title = req.params.title

  try {
    const products = await db.any(productQueries.findProduct, `%${title}%`)
    if(products) {
      send(200, products);
    }
  } catch(err) {
    send(500, err.message || 'Try again')
  }
}

module.exports = controllers
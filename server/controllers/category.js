const db = require('./../helpers/db');
const categoryQueries = require('./../helpers/queries').category;

let controllers = {};

controllers.get = async (req,res) => {
  const send = (status, body) => res.status(status).send({ status, body });
  try {
    const categories = await db.many(categoryQueries.categories);
    if(categories) {
      send(200, categories)
    }
  } catch(err) {
    send(500, err.message || 'Try again');
  }
}

controllers.find = async (req,res) => {
  const send = (status, body) => res.status(status).send({ status, body });
  try {
    const products = await db.any(categoryQueries.findMoviesByCategory, req.params.cat);
    if(products) {
      send(200, products);
    }
  } catch(err) {
    send(500, err.message || 'Try again')
  }
}

module.exports = controllers
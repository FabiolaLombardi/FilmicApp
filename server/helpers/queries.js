module.exports.user = {
    
    findEmail: 'SELECT email_users FROM users WHERE email_users = $1',
    addUser: 'INSERT INTO users (email_users,name_users,last_users,pass_users, id_type_users) VALUES ($1,$2,$3,$4, (SELECT id_type_users FROM type_users WHERE des_type_users = $5)) RETURNING id_users',
    addCart: 'INSERT INTO cart (id_users) VALUES ($1)',
    findUser: 'SELECT users.id_users AS userId, cart.id_cart AS cartId, users.name_users AS name, users.last_users AS lastname, users.pass_users AS password, users.email_users AS email FROM users INNER JOIN cart ON cart.id_users = users.id_users WHERE users.email_users = $1',

}

module.exports.category = {
    findMoviesByCategory: 'SELECT id_product AS id, title_product AS title, des_product AS description, price_product AS price, img_product AS img FROM product AS P INNER JOIN category AS C ON C.id_category = P.id_category WHERE des_category = $1',
    categories: 'SELECT des_category AS name, id_category AS id from category',
}
module.exports.product = {
    addProduct: 'INSERT INTO product(id_category, title_product, des_product, price_product, img_product) VALUES((SELECT id_category from category WHERE des_category = $1), $2, $3, $4, $5) RETURNING id_product',
    findProduct: 'SELECT id_product AS id, title_product AS title, des_product AS description, price_product AS price, img_product AS img FROM product WHERE title_product LIKE $1',
    // findProducts: 'SELECT prod.id_product AS productid, users.username AS username, prod.id_user AS userid, prod.brand_product AS brand, prod.price_product AS price, prod.name_product AS name, prod.des_product AS description, prod.stock_product AS stock, prod.img_product AS img FROM product AS prod INNER JOIN app_user AS users ON users.id_user = prod.id_user',
    // userProducts: 'SELECT prod.id_product AS productid, users.username AS username, prod.id_user AS userid, prod.brand_product AS brand, prod.price_product AS price, prod.name_product AS name, prod.des_product AS description, prod.stock_product AS stock, prod.img_product AS img FROM product AS prod INNER JOIN app_user AS users ON users.id_user = prod.id_user WHERE users.id_user = $1',
    
    // deleteProduct: 'DELETE FROM product WHERE id_user = $1 AND id_product = $2',
    // deleteProductFromCarts: 'DELETE FROM cart_product WHERE id_product = $1',
    // modifyProduct: 'UPDATE product SET name_product = $3, des_product = $4, stock_product = $5, price_product = $6, brand_product = $7 WHERE id_user = $1 AND id_product = $2',
    // name_product = $3, des_product = $4, stock_product = $5, price_product = $6, brand_product = $7
}

module.exports.cart = {

    add: 'INSERT INTO cart_product (id_cart, id_product, quantity, date, id_status) VALUES($1,$2,$3,$4, (SELECT id_status FROM status WHERE des_status = \'order\')) RETURNING id_cart_product',
    // deleteItem: 'DELETE FROM cart_product WHERE id_cart = $1 AND id_cart_product = $2',
    // getItems: 'SELECT cart.id_cart_product AS id, cart.id_product AS idproduct, prod.brand_product AS brand, prod.price_product AS price, prod.name_product AS name, cart.quantity_product AS quantity FROM cart_product AS cart INNER JOIN product AS prod ON prod.id_product = cart.id_product WHERE id_cart = $1',
    // getItem: 'SELECT cart.id_cart_product AS id, cart.id_product AS idproduct, prod.brand_product AS brand, prod.price_product AS price, prod.name_product AS name, cart.quantity_product AS quantity FROM cart_product AS cart INNER JOIN product AS prod ON prod.id_product = cart.id_product WHERE id_cart_product = $1',
}

const db = require('./../helpers/db');
const userQueries = require('./../helpers/queries').user;

module.exports.isNew = (req, res, next) => {
    verifyData(req.body).then((data) => {
        if(data) 
            res.send(data);
        else 
            next();             
    }).catch((error) => {
        console.log(error)
        res.send({
            status: 500,
            body: 'Try again'
        })
    })
}

async function verifyData(params) {
    return db.task('signup-task', async t => {
        const email = await t.oneOrNone(userQueries.findEmail, [params.email]);
        return (email) ? { status: 409, body: 'email already registered' } : false;
    }).catch((error) => {
        throw error
    });
}
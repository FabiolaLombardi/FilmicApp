const db = require('./../helpers/db');
const userQueries = require('./../helpers/queries').user;
const bcrypt = require('bcryptjs');

let controllers = {}

controllers.signup = (req, res) => {
    db.task('insert-user', async task => {
        let hash = bcrypt.hashSync(req.body.password, 10);
        const newId = await task.one(userQueries.addUser, [req.body.email, req.body.firstname, req.body.lastname, hash, 'Invited'], q => q && q.id_users);
        console.log(newId);
        if (newId) {
            await task.none(userQueries.addCart, newId);            
        }
        return { newId }
    }).then((data) => {
        res.status(200).send({
            status: 200,
            body: 'Success'
        });
    }).catch((error) => {
        console.log(error)
        res.status(500).send({
            status: 500,
            body: 'Try again'
        });
    })
}

controllers.login = (req, res) => {
    db.connect().then((obj) => {
        obj.one(userQueries.findUser, [req.body.email]).then((user) => {
            obj.done();
            bcrypt.compare(req.body.password, user.password).then((isMatch) => {
                if (isMatch) {
                    delete user['password']
                    req.logIn(user, (err) => {
                        if (err)
                            return res.status(500).send({
                                status: 500,
                                body: 'Could not log in user',
                            })
                        res.status(200).send({
                            status: 200,
                            body: 'Login successful!',
                        })
                    })
                } else {
                    res.status(422).send({
                        status: 422,
                        body: 'Wrong password',
                    });
                }
            })            
        }).catch((error) => {
            console.log(error);
            res.status(422).send({
                status: 422,
                body: 'User not found',
            });
        });
    }).catch((error) => {
        console.log(error)
        res.status(503).send({
            status: 503,
            body: 'Try again',
        });
    });
}

controllers.logout = (req, res) => {
    req.logout();
    res.status(200).send({
        status: 200,
    })
}

controllers.auth = (req,res) => {
    if (req.isAuthenticated()) {
        res.status(200).send({ status: 200, body:'logged'});
    } else {
        res.status(200).send({ status: 401, body:'invited'});
    }
}

// Test controller
controllers.test = (req, res) => {
    res.status(200).send({
        status: 200,
        session: req.session.passport,
    })
}

module.exports = controllers;
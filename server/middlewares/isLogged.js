module.exports.isLoggedOut = (req, res, next) => {
    if (!req.isAuthenticated())
        next();
    else 
        res.send({
            status:304,
            body: 'There is already an active session',
        });        
}

module.exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated())
        next();
    else
        res.send({
            status: 304,
            body: 'You must login first',
        });
}

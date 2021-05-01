function auth (req, res, next){
    if (typeof(req.session.usuario) != 'undefined'){
        return next();
    } else {
        return res.send('Para realizar uma rezerva você precisa fazer login no sitema!')
    }
}

module.exports = auth
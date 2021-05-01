function auth (req, res, next){
    console.log(req.session.user)
    if (typeof(req.session.user) != 'undefined'){
        return next();
    } else {
        return res.send('Para realizar uma rezerva você precisa fazer login no sitema!')
    }
}

module.exports = auth
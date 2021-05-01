function auth (req, res, next){
    
    if (typeof(req.session.user) != 'undefined'){
        return next();
    } else {
        return res.send('Para realizar uma rezerva você precisa fazer login no sistema!')
    }
}

module.exports = auth
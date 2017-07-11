module.exports.index = (app, req, res) => {
    res.render("access/login", {validacao: ""});
}

module.exports.logout = (app, req, res) => {
    req.session.destroy((err)=>{
        
        res.render("access/login", {validacao: ""});
    });
    
}

module.exports.authenticate = (appl, req, res) => {
    
    var usuario = req.body;

    var connection = appl.config.database;

    var db = new appl.app.models.Usuarios(connection);

    db.authenticate(usuario, req, res);
}

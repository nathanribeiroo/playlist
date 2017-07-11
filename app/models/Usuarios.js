var crypto = require("crypto");

function Usuarios(connection) {
    this._connection = connection();
}

Usuarios.prototype.authenticate = function (usuario, req, res) {
    this._connection.query(`SELECT * FROM usuarios WHERE usuario_login = '${usuario.usuario_login}' AND usuario_senha = '${crypto.createHash("md5").update(usuario.usuario_senha).digest("hex")}'`, (error, results) => {
        if (error)
            throw error;
        
        if (results[0] != undefined) {
            req.session.autorizado = true;
            req.session.usuario = results[0];
        } else {
            req.session.autorizado = false;
            delete req.session.usuario;
        }

        if(req.session.autorizado) {
            res.redirect("/");
        } else {
            res.render("access/login", {validacao: "Usuário ou senha incorretos."});
        }


    });

    this._connection.end();
};

module.exports = function () {
    return Usuarios;
}